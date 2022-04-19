import React from 'react';
import styles from "./MovieDetail.module.css";

function MovieDetail({ title, bgImage, desc, rating, coverImg, runtime, genres, lang, like}) {
    return (
        <div>
            <img className={styles.bg} src={bgImage} />
            <div className={styles.detail}>
                <img className={styles.coverImg} src={coverImg} alt={title}/>
                <h2>{title}</h2>
                <p>{genres}</p>
                <div>
                    <span>{runtime}분</span>
                    <span>⭐️ rating: {rating} </span>
                    <span>❤️ like: {like}</span>
                </div>
                <p>언어: {lang}  </p>
                <h4>요약</h4>
                <p>{desc}</p>
                
            </div>

        </div>
    );
}

export default MovieDetail;