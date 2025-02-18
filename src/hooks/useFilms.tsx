import { useEffect, useState } from "react"


export interface IFilm {
    id: number
    name: string
    information: string
    filmImage: string
    actors: string
    someFacts: string
    rating: number
    year: number
    language: string
    country: string
    age: number
    genre: string
    genreId: number
    img: string
}
// img в експресс модели нету. Ошибка будет пока не добавить

export function useFilms(){
    const [films, setFilms] = useState<IFilm[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {

        async function fetchFilms() {
            try{
                setLoading(true)
                const response = await fetch(`http://localhost:5000/films`)
                const filmData = await response.json()
                setFilms(filmData)
            } catch(error){
                if (error instanceof Error){
                    setError(error.message)
                    }
            } finally{
                setLoading(false)
            }  
        }
        fetchFilms()
    }, [])
    return{films: films, loading: loading, error: error}
}


