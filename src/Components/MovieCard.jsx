import React from 'react';

function MovieCard({ poster_path, name, handleAddtoWatchList, movieObj, handleFilterWatchList, watchList }) {
    function doesContain(movieObj) {
        return watchList.some(movie => movie.id === movieObj.id);
    }

    return (
        <div className='relative h-[40vh] w-[200px] rounded-xl overflow-hidden hover:scale-110 duration-300 hover:cursor-pointer'>
            <div
                className='h-full w-full bg-center bg-cover'
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
            >
                {doesContain(movieObj) ? (
                    <div onClick={() => { handleFilterWatchList(movieObj) }} className='absolute top-0 right-0 flex items-center justify-center h-8 w-8 rounded-full bg-gray-900/60 m-2'>
                        &#10060;
                    </div>
                ) : (
                    <div onClick={() => { handleAddtoWatchList(movieObj) }} className='absolute top-0 right-0 flex items-center justify-center h-8 w-8 rounded-full bg-gray-900/60 m-2'>
                        &#128525;
                    </div>
                )}
            </div>
            <div className='flex flex-wrap flex-row justify-around absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-xl text-center p-2'>
                {name}
            </div>
        </div>
    );
}

export default MovieCard;
