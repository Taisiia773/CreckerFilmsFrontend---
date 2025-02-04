import { useEffect, useState } from "react"

export function useGenres(){
    const [genres, setGenres] = useState<string[]>([])
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