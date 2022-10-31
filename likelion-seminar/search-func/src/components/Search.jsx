import { useState, useEffect } from "react";

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
    const onSearch = (e) => {
        e.preventDefault();
       // if (Search === null || search === '') // 검색어가 없을 경우 전체 리스트 반환
            
    };


    const filterTitle = movies.filter((p) => {
        return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    return(
        <>
        <form onSubmit={e => onSearch(e)}>
            <input 
                type="text" 
                value={search} 
                placeholder="검색어를 입력하세요." 
                onChange={onChangeSearch}
            />
            <button type="submit">검색</button>
        </form>

        <div>
            {filterTitle.map(movie => <div><span>{movie.title}</span></div>)}
        </div>
        </>
    );
};

export default Search;