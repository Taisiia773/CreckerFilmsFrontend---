import { IFilm, useFilms } from "../../hooks/useFilms";
import { TailSpin } from "react-loader-spinner";
import "./AdminFilmPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Импортируйте useParams
import { useDeleteFilm } from "../../hooks/useDeleteFilm";

export function AdminFilmPage() {
  const { films, loading, error } = useFilms();
  const [search, setSearch] = useState("");
  const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([]);

  const deleteFilm = useDeleteFilm();

  useEffect(() => {
    if (films) {
      const filtered = films.filter((film) =>
        film.name.toLowerCase().includes(search.toLowerCase())
      );
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
        <Link className="filmyLink" to={`/adminfilm`}>
          <p className="filmy">Фильмы</p>
        </Link>
        <p>|</p>
        <Link className="genresLink" to={`/admingenre`}>
          <p className="genres2">Жанры</p>
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
          <Link to={'/addfilm'}>
            <button className="admin-add">
              Добавить +
            </button>
          </Link>
        </span>
      </span>
      <div className="admin-div">
        <span className="admin-filter-span"></span>
        <div className="allFilms">
          <span className="headerFilms"><p className="nickname">Никнейм</p></span>
          <div className="filmsOnly">
            {filteredFilms.map((film) => (
              <div className="admin-film-item-main" key={film.id}>
                <div className="admin-film-item">
                  <Link className="filmName" to={`/film/${film.id}`}>
                    <img src={film.img} alt={film.name} className="quadratic"/>
                    <h3 className="nameOfFilm">{film.name}</h3>
                  </Link>
                  <div className="oneMoreDiv2">
                    <Link to={`/adminfilm/${film.id}`}>
                      <p className="quadratic2">
                        <img className="imgEdit" src="https://th.bing.com/th/id/OIP.2ypqUNkqiZpc38tZa8BvHQHaHx?rs=1&pid=ImgDetMain" alt="404" />
                      </p>
                    </Link>
                    <button type="button" onClick={async () => { await deleteFilm(Number(film.id));}} className="delete-btn">
                      <p className="quadratic3">
                        <img className="imgEdit" src="https://avatanplus.com/files/resources/mid/5968a2c8f2ed115d40bbe123.png" alt="404" />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="admin-films"></div>
      </div>
    </div>
  );
}
