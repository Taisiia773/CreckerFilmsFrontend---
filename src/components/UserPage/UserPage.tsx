import { IGenre, useGenres } from "../../hooks/useGenres"
import { TailSpin } from "react-loader-spinner"
import "./AdminGenrePage.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { GenreForm } from "../Forms/GenreForms"

export function AdminGenre(){

   return(
    <div className="Admin-Genre-Page-container">
        <GenreForm/>
    </div>
   )
} 