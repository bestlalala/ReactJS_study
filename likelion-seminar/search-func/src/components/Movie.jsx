import PropTypes from "prop-types";
import React from 'react';
import styled from "styled-components";

function Movie({ id, coverImg, title_long, rating, summary, genres }) {
    return (
        <Card>
            <img src={coverImg} alt={title_long}/>
            <MovieText>
              <h2>
                  {title_long}
              </h2>
              <h4>★{rating}</h4>
              <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
              <ul>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </MovieText>
        </Card>
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

const Card = styled.div`
  display: flex;
  margin: 2rem;
  width: 600px;
  height: 300px;
  box-shadow: 5px 5px 5px 5px gray;
`;

const MovieText = styled.div`
  display: block;
  padding: 1rem 2rem;
  width: 400px;
`;