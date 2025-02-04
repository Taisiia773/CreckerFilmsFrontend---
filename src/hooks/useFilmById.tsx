import { useState, useEffect } from "react"
import { IFilm } from "./useFilms"

export function useFilmById(id: number | undefined){

    const [film , setFilm] = useState<IFilm>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    useEffect(() => {
        if(!id){
            return
        }
        async function fetchFilms() {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:5000/film/${id}`)
                const filmData = await response.json()
                setFilm(filmData)
            } catch (error) {
                console.log(error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
            
        }
        fetchFilms()

    }, [id])
    return {film: film, loading: loading, error: error}
}