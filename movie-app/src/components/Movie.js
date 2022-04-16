import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title_long, rating, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={coverImg} alt={title_long}/>
            <div>
              <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>
                  {title_long}
                </Link>
              </h2>
              <h4 className={styles.movie__rating}>★{rating}</h4>
              <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
              <ul className={styles.movie__genres}>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이기 때문에 주의!
};

export default Movie;