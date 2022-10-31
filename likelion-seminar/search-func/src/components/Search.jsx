import { useState, useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
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
    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const filterTitle = movies.filter((p) => {
        return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    return(
        <>
        <StyledForm>
            <input 
                type="text" 
                value={search} 
                placeholder="검색어를 입력하세요." 
                onChange={onChangeSearch}
            />
            <button type="submit">검색</button>
        </StyledForm>

        {loading ? (
          <div>
            <h1>Movie List</h1>
            <span>Loading...</span>
          </div>
         ) : (
        <MovieList>
            {filterTitle.map(movie => 
                <Movie 
                key={movie.id} 
                id={movie.id} 
                coverImg={movie.medium_cover_image} 
                title_long={movie.title_long} 
                rating={movie.rating}
                summary={movie.summary} 
                genres={movie.genres}
                />
            )}
        </MovieList>
         )}
        </>
    );
};

export default Search;

const StyledForm = styled.form`
    text-align: center;

    & > input {
        width: 200px;
        height: 20px;
        font-size: 12pt;
    }

    & > button {
        height: 25px;
        font-size: 12pt;
        margin: 3px;
    }
`;
const MovieList = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
`;