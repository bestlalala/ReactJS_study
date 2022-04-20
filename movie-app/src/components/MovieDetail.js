import React from 'react';
import styles from "./MovieDetail.module.css";

function MovieDetail({ title, bgImage, desc, rating, coverImg, runtime, genres, lang, like}) {
    return (
        <div>
            <img className={styles.bg} src={bgImage} />
            <div className={styles.detail}>
                <img className={styles.coverImg} src={coverImg} alt={title}/>
                <h2 className={styles.title}>{title}</h2>
                <table className={styles.mark}>
                    <tr>
                        <td> ⭐️ </td>
                        <td> ❤️ </td>
                    </tr>
                    <tr>
                        <td> {rating} </td>
                        <td> {like} </td>
                    </tr>
                    
                </table>
                <div className={styles.movie__genres}>
                {genres.map((g) => (
                  <span key={g}>{g}  </span>
                ))}
                </div>
                <p className={styles.info}>{runtime}분 / 언어: {lang}  </p>
                <h4>요약</h4>
                <p className={styles.desc}>{desc}</p>
            </div>

        </div>
    );
}

export default MovieDetail;