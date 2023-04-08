import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import { getMovies } from "../../services/api";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        getData()
    }, [type]);

    const getData = async () => {
        let response = await getMovies(type);
        setMovieList(response.results);
    }

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;