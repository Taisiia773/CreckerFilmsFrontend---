import { IGenre, useGenres } from "../../hooks/useGenres"
import { TailSpin } from "react-loader-spinner"
import "./AdminGenrePage.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AdminGenre } from "./AdminGenre/AdminGenre";

export function AdminGenrePage(){
    const {genres, loading, error } = useGenres()
    const [search, setSearch] = useState("");
    const [filteredGenres, setFilteredGenres] = useState<IGenre[]>([]);
    useEffect(() => {
        if (genres) {
          const filtered = genres
            .filter((genre) =>
                genre.name.toLowerCase().includes(search.toLowerCase())
            )
          setFilteredGenres(filtered);
        }
      }, [genres, search]);
    
      if (loading) {
        return <TailSpin />;
      }
    
      if (error) {
        return <div>Ошибка: {error}</div>;
      }
    
    
    
   return(
    <div className="Admin-Genre-Page-container">
              <span className="admin-rediraction-span">
          <Link  className="filmyLink" to={`/adminfilm`}>
            <p className="filmy2">Фильмы</p>
          </Link> 
          <p>|</p>
          <Link className="genresLink" to={`/admingenre`}>
            <p className="genres">Жанры</p>
          </Link> 
        </span>

        <span className="admin-genre-searchbar-span">
        <div className="admin-genre-Search">
            <div className="admin-genre-searchBar">
                <input 
                    type="text" 
                    placeholder="Search.." 
                    value={search}
                    onChange={(inputValue) => setSearch(inputValue.target.value)}/>
            </div>
        </div>
        <span className="admin-genre-span-add">
            <Link to={'/addgenre'}>
                <button className="admin-genre-add">
                    Добавить +
                </button>
            </Link>
        </span>
        </span>
        <div className="admin-genre-div">
            <span className="admin-genre-filter-span"></span>
            {/* <div >{filteredGenres.map((genre)=> 
                    <div key={genre.id} className="admin-genre-film-item">
                        <h3>{genre.name}</h3>
                        <Link to={`/genres/${genre.id}`}>
                            <p>edit</p>
                        </Link>
                    </div>

            )}</div> */}
            <div className="allFilms">
          <span className="headerFilms"><p className="nickname">Name</p></span>
          <div className="filmsOnly">
          {filteredGenres.map((genre) => 
            <div className="admin-film-item-main">
              <div key={genre.id} className="admin-film-item">
              <div className="filmName">
                <div className="oneMoreDiv">
                    <h3 className="nameOfFilm">{genre.name}</h3>
                </div>
                <div className="oneMoreDiv2">
                    <Link to={`/admingenre/${genre.id}`}>
                        <p className="quadratic2"><p className="pRandom"><img className="imgEdit" src="https://th.bing.com/th/id/OIP.2ypqUNkqiZpc38tZa8BvHQHaHx?rs=1&pid=ImgDetMain" alt="404" /></p></p>
                    </Link>
                    {/* <Link to={`/genres/${genre.id}`}>
                        <p className="quadratic3"><p className="pRandom"><img className="imgEdit" src="https://avatanplus.com/files/resources/mid/5968a2c8f2ed115d40bbe123.png" alt="404" /></p></p>
                    </Link> */}
                </div>

              </div>
                
            </div>
            </div>
          )}
          </div>
        </div>
            <div className="admin-genre-genres">
            </div>
        </div>
    </div>
   )
} 