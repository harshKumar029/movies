import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import MovieDetailsPage from './MovieDetails';

function Card() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setMovies(response.data.map(item => item.show));
                console.log("data", response.data)
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);
    console.log("testsws", movies)
    return (
        <>
            <Navbar />
            <div className='movieshome'>
                <div className='moviecard'>
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            movie.image ? (
                                <div key={movie.id}>
                                    <Link to={{ pathname: `/movie/${movie.id}`, state: { movie } }}>
                                        <img src={movie.image.medium} alt={movie.name} />
                                        {/* {movie ? <MovieDetailsPage movie={movie} /> : <p>Loading...</p>} */}
                                    </Link>

                                </div>
                            ) : null
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>
        </>

    );
}

export default Card;
