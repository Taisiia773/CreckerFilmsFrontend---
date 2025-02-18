import { useEffect, useState } from "react"

export interface IGenre{
    id: number
    name: string
    description: string
}

export function useGenres(){
    const [genres, setGenres] = useState<IGenre[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {

        async function fetchGenres() {
            try{
                setLoading(true)
                const response = await fetch(`http://localhost:5000/genres`)
                const genreData = await response.json()
                setGenres(genreData)
            } catch(error){
                if (error instanceof Error){
                    setError(error.message)
                    }
            } finally{
                setLoading(false)
            }  
        }
        fetchGenres()
    }, [])
    return{genres: genres, loading: loading, error: error}
}


export function useGenresById(id: number | undefined){
    const [genre, setGenre] = useState<IGenre>()
    useEffect(() => {
        if(!id){
            return
        }
        async function fetchGenresById() {
            try{
                const response = await fetch(`http://localhost:5000/genre/${id}`)
                const genreData = await response.json()
                setGenre(genreData)
            } catch(error){
                if (error instanceof Error){
                    console.log(error.message)
                }
            }
        }
        fetchGenresById()
    }, [])
    return{genre: genre}
}
