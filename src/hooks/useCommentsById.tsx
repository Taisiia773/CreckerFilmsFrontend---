import { useEffect, useState } from "react"

export interface IComments{
    id: number
    text: string
    filmId: number

}

export function useComments(id: number | undefined){
    const [comments, setComments] = useState<IComments[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {

        async function fetchComments() {
            try{
                setLoading(true)
                const response = await fetch(`http://localhost:5000/comments/${id}`)
                const filmData = await response.json()
                setComments(filmData)
            } catch(error){
                if (error instanceof Error){
                    setError(error.message)
                    }
            } finally{
                setLoading(false)
            }  
        }
        fetchComments()
    }, [])
    return{comments: comments, loading: loading, error: error}
}