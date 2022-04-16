import { useEffect, useState } from 'react';
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    console.log(movies);
    return (
      <div className={styles.container}>
        {loading ? (
          <div>
            <h1>Movie List</h1>
            <span>Loading...</span>
          </div>
         ) : (
           <div>
             <h1 className={styles.movie__list}>Movie List</h1>
            <div className={styles.movies}>
              {movies.map((movie) => (
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  coverImg={movie.medium_cover_image} 
                  title_long={movie.title_long} 
                  rating={movie.rating}
                  summary={movie.summary} 
                  genres={movie.genres}
                />
              ))}
            </div>
          </div>
         )}
      </div>
    );
}
export default Home;