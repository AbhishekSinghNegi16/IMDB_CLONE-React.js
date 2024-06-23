import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import WatchList from './Components/WatchList';

import {BrowserRouter ,Routes ,Route}  from "react-router-dom";
import Banner from './Components/Banner';
import { useEffect, useState } from 'react';

function App() {
  let[watchList,setWatchList]=useState([])

  let handleAddtoWatchList = (movieObj)=>{
    let newWatchList = [...watchList,movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleFilterWatchList =(movieObj)=>{
    let filterWatchList = watchList.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setWatchList(filterWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))

  },[])
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Banner/><Movies watchList={watchList} handleAddtoWatchList={handleAddtoWatchList} handleFilterWatchList={handleFilterWatchList}/></>}/>
        <Route path="/watchList" element={<WatchList watchList={watchList} setWatchList={setWatchList}/>}/>
      </Routes>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
