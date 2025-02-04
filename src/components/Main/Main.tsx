import './Main.css'
import { ReactNode } from "react"
import { FilmsList } from '../FilmsList/FilmsList'
import { AnnouncementList } from "../AnnouncementList/AnnouncementList"
import {AnnouncementLeft} from "../Announcements/Announcements"
import { HistoryFilms } from '../HistoryFilms/HistoryFilms'

export function Main() {
    return (
        <div className='container'>
            <div>
                <h1>New announcements</h1>
                <div className='AnnouncementsContainer'>
                    <AnnouncementLeft/>
                    <AnnouncementList/>
                </div> 
            </div> 
            <div>
                <h1>emae its fyp</h1>
                <HistoryFilms/>
            </div>
                <FilmsList/>
        </div>
    )
}