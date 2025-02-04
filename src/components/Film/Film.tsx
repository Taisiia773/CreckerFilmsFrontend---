import { useState } from "react"
import { useHistoryContext } from "../context/historyContext"
import { IFilm } from "../../hooks/useFilms"
import "./Film.css"
import { Link } from "react-router-dom"


interface IFilmProps{
    id: number
    name: string
    genre: string
    img: string
    information?: string
    filmImage?: string
    actors?: string
    someFacts?: string
    rating?: number
    year?: number
    language?: string
    country?: string
    age?: number
}

export function Film(props: IFilmProps, ){
    const {addHistoryItem, isWatched} = useHistoryContext()
    return( 
        <Link to={`/film/${props.id}`}>
            <button className="film-button" onClick={() => {
                    if (props && !isWatched(props.id)) {
                        addHistoryItem(props as IFilm)
                    }
                }}>

                
                <div className="Film">
                    <img src={props.img} alt="aboba" className="film-image"/>
                    <div className="film-text-div">
                        <p className="name">{props.name}</p>
                    </div>
                </div>
            </button>
        </Link>
    )
}