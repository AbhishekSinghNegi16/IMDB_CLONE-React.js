import React, { useEffect, useState } from 'react';
import genreids from '../genres/genre';

function WatchList({ watchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres']);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let uniqueGenres = new Set();
    watchList.forEach((movieObj) => {
      uniqueGenres.add(genreids[movieObj.genre_ids[0]]);
    });
    setGenreList(['All Genres', ...Array.from(uniqueGenres)]);
  }, [watchList]);

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre, index) => (
          <div key={index} className='flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4'>
            {genre}
          </div>
        ))}
      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type='text' placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' />
      </div>

      <div className='overflow-hidden border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center items-center gap-4'>
                <div onClick={sortIncreasing}><i className="fa-solid fa-arrow-up"></i></div>
                <div>Ratings</div>
                <div onClick={sortDecreasing}><i className="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLowerCase());
            }).map((movieobj) => {
              return (
                <tr key={movieobj.id} className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieobj.backdrop_path}`} alt={movieobj.title} />
                    <div className='mx-10'>{movieobj.title}</div>
                  </td>
                  <td>{movieobj.vote_average}</td>
                  <td>{movieobj.popularity}</td>
                  <td>{genreids[movieobj.genre_ids[0]]}</td>
                  <td className='text-red-800'>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
