import {useState, useEffect} from 'react'
import { Film } from "../Film/Film"
import { TailSpin } from "react-loader-spinner"
import { useFilms } from '../../hooks/useFilms'
import { useGenres } from '../../hooks/useGenres'
import "./FilmsList.css"



export function FilmsList(){
    const {films, loading, error } = useFilms()
    const {genres, loading: genresLoading, error: genresError,} = useGenres();
    const [selectedGenre, setSelectedGenre] = useState<string[]>([])
    const [FilteredFilms, setFilteredFilms] = useState(films)
    const tempArray = [...FilteredFilms, films]
    useEffect(() => {
        if (selectedGenre.length === 0) {
            setFilteredFilms(films); 
        } else {
            const filtered = films.filter((film) => {
                return selectedGenre.includes(String(film.genreId));
            });
            setFilteredFilms(filtered);
        }
    }, [selectedGenre, films]);

    const handleGenreChange = (genreId: string) => {
        setSelectedGenre((prevSelected) => {
            if (prevSelected.includes(genreId)) {
                return prevSelected.filter((id) => id !== genreId);
            } else {
                return [...prevSelected, genreId];
            }
        });
    };

    

    

    return (
        <div className="films">
            <div className="filter">
            {genresLoading ? (
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                ) : genresError ? (
                    <h1>{genresError}</h1>
                ) : (
                <div className="SelectCategories">
                    {genres.map((genre) => (
                        <div className='SelectCategory'>
                            <label className='categoryName' key={genre.id}>
                                <input
                                    type="checkbox"
                                    checked={selectedGenre.includes(String(genre.id))}
                                    onChange={() => handleGenreChange(String(genre.id))}
                                />
                                {genre.name}
                            </label>
                        </div>
                    ))}
                </div>

                

                )}
            </div>

            <section className='FilmsList-section'>
            {loading === true ? (
                <div className="loader">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : error !== "" ? (
                <div>{error}</div>
            ) : (
                <div className="filmsDiv">
                    {FilteredFilms.map((film) => {

                            return <Film
                            id={film.id}
                            img={film.img}
                            genre={film.genre}
                            name={film.name}
                            key={film.id} />
                })}
                </div>
            )}
            </section>
        </div>
    )
}
