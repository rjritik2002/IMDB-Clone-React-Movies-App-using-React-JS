import axios from "axios";

export const getMovies = async (type) => {
    const API_URL = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    try {
        const response = await axios.get(API_URL);
        console.log(response.data.results);
        return(response.data);
    } catch (error) {
        console.log("Error while callig API", error.message);
        return error.response;
    }
}