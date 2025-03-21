import { IGenre, useGenres } from "../../hooks/useGenres"
import { TailSpin } from "react-loader-spinner"
import "./AdminGenrePage.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AdminGenre } from "./AdminGenre";

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
        <span className="admin-genre-rediraction-span">
            <Link to={`/adminfilm`}>
                <p className="filmy">Фильмы</p>
            </Link> 
            <p>|</p>
            <Link to={`/admingenre`}>
                <p className="filmy">Жанры</p>
            </Link> 
            <p>|</p> 
            <Link to={`/adminusers`}>
                <p>Пользователи</p>
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
            <Link to={''}>
                <button className="admin-genre-add">
                    Добавить +
                </button>
                <AdminGenre/>
            </Link>
        </span>
        </span>
        <div className="admin-genre-div">
            <span className="admin-genre-filter-span"></span>
            <div >{filteredGenres.map((genre)=> 
                    <div key={genre.id} className="admin-genre-film-item">
                        <h3>{genre.name}</h3>
                        <Link to={`/genres/${genre.id}`}>
                            <p>edit</p>
                        </Link>
                    </div>

            )}</div>
            <div className="admin-genre-genres">
            </div>
        </div>
    </div>
   )
} 