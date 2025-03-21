import { IFilm, useFilms } from "../../hooks/useFilms";
import { TailSpin } from "react-loader-spinner";
import "./AdminFilmPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AdminFilmPage() {
  const { films, loading, error } = useFilms();
  const [search, setSearch] = useState("");
  const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([]);

  useEffect(() => {
    if (films) {
      const filtered = films
        .filter((film) =>
          film.name.toLowerCase().includes(search.toLowerCase())
        )
      setFilteredFilms(filtered);
    }
  }, [films, search]);

  if (loading) {
    return <TailSpin />;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="Admin-Page-container">
      <span className="admin-rediraction-span">
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
      <span className="admin-searchbar-span">
        <div className="admin-Search">
          <div className="admin-searchBar">
            <input
              type="text"
              placeholder="Search.."
              value={search}
              onChange={(inputValue) => setSearch(inputValue.target.value)}
            />
          </div>
        </div>
        <span className="admin-span-add">
          <button className="admin-add">Добавить+</button>
        </span>
      </span>
      <div className="admin-div">
        <span className="admin-filter-span"></span>
        <div>
          {filteredFilms.map((film) => (
            <div key={film.id} className="admin-film-item">
              <Link to={`/adminfilm/${film.id}`}>
                <h3>{film.name}</h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="admin-films"></div>
      </div>
    </div>
  );
}