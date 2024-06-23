import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies({ handleAddtoWatchList, handleFilterWatchList, watchList }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c2c8b17bfb38800100368314791fb15e&include_adult=false&include_video=false&language=en-US&page=${page}`)
            .then((res) => {
                setMovies(res.data.results);
            });
    }, [page]); // Correct dependency array

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    return (
        <div className='p-5 m-5'>
            <div className='text-2xl font-bold text-center'>
                Trending Movies
            </div>
            <div className='flex flex-row flex-wrap justify-around gap-8'>
                {movies.map((movieObj) => (
                    <MovieCard
                        key={movieObj.id}
                        movieObj={movieObj}
                        poster_path={movieObj.poster_path}
                        name={movieObj.original_title}
                        handleAddtoWatchList={handleAddtoWatchList}
                        handleFilterWatchList={handleFilterWatchList}
                        watchList={watchList}
                    />
                ))}
            </div>
            <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page} />
        </div>
    );
}

export default Movies;
