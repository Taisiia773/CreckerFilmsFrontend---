import { useParams } from "react-router-dom"
import { useFilmById } from "../../hooks/useFilmById"
import { TailSpin } from "react-loader-spinner"
import "./AdminPage.css"
import { useGenresById } from "../../hooks/useGenres"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function AdminPage(){
    
   return(
    <div className="Admin-Page-container">
        <span className="admin-rediraction-span"><p className="filmy">Фильмы</p> <p>|</p> <p>Пользователи</p></span>
        <span className="admin-searchbar-span">
        <div className="admin-Search">
            <div className="admin-searchBar">
                <input type="text" placeholder="Search.." />
            </div>
        </div>
        <span className="admin-span-add"><p className="admin-add">Добавить+</p></span>
        </span>
        <div className="admin-div">
            <span className="admin-filter-span"></span>
            <div className="admin-genres"></div>
        </div>
    </div>
   )
} 