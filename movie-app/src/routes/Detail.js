import React from "react"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie);
    return (
        <div>
            <h1>Movie Detail</h1>
            {loading ? (
                <div>
                    <span>Loading...</span>
                </div>
            ) : (
                <MovieDetail className={styles.container}
                key={id}
                title={movie.title_long}
                bgImage={movie.background_image}
                desc={movie.description_full}
                rating={movie.rating}
                coverImg={movie.medium_cover_image}
                runtime={movie.runtime}
                genres={movie.genres}
                lang={movie.language}
                like={movie.like_count}
                />
            )}
        </div>
    );
}
export default Detail;