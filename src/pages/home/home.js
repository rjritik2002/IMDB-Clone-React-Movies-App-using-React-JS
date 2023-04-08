import React, { useEffect, useState } from 'react';
import './home.css';
import { getMovies } from '../../services/api';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getMovies();
            setPopularMovies(response.results);
        }
        getData();
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>

                                <div className="posterImage_overlay">
                                    <div className="posterImage_title">
                                        {movie ? movie.original_title : ""}
                                    </div>
                                    <div className="posterImage_runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage_rating">
                                            {movie ? movie.vote_average : ""}
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="posterImage_description">
                                        {movie ? movie.overview : ""}
                                    </div>
                                </div>
                            </Link>

                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home;