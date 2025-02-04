import {useState, useEffect} from 'react'
import { Film } from "../Film/Film"
import { TailSpin } from "react-loader-spinner"
import { useFilms } from '../../hooks/useFilms'
import { useGenres } from '../../hooks/useGenres'
import "./FilmsList.css"

const films = [
    {
        name: "Дэдпул и Росомаха",
        genre:"boss fimoz",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 0
    },
    {
        name: "Дэдпул и Росомаха",
        genre:"monster abayudno",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 1
    },
    {
        name: "Дэдпул и Росомаха",
        genre:"Serega Pirate",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 2
    },
    {
        name: "Дэдпул и Росомаха",
        genre:"papa wildberries",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 3
    },
]

export function FilmsList(){
    const {films, loading, error } = useFilms()
    const [selectedGenre, setSelectedGenre] = useState("All")
    const [FilteredFilms, setFilteredFilms] = useState(films)
    useEffect(() => {
        console.log(selectedGenre)
        if (selectedGenre === "All") {
            setFilteredFilms(films)
        } else {
            const filtered = films.filter((film) => {
                return film.genre === selectedGenre
            })
            setFilteredFilms(filtered)
        }
    }, [selectedGenre, films])
    const {genres, loading: genresLoading, error: genresError,} = useGenres();

    return (
        <div className="films">
            <div className="historyFilms">
                
            </div>
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
                <select className="SelectCategories" onChange={(event) => {
                    const selectedValue = event.target.value
                    setSelectedGenre(selectedValue)
                }}>
                    <option value="All">All</option>
                    <option value="boss fimoz">boss fimoz</option>
                    <option value="monster abayudno">monster abayudno</option>
                    <option value="Serega Pirate">Serega Pirate</option>
                    <option value="papa wildberries">papa wildberries</option>
                </select>
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
				<div className="productsDiv">
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

