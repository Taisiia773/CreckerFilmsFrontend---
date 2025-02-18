import "./ActorPage.css"
import { useFilms } from "../../hooks/useFilms"
import { Film } from "../Film/Film"

export function ActorPage(){
    const {films, loading, error } = useFilms()

   return(
        <div className="actors-container">
                <div className="actor-name-div">
                    <h1 className="actor-name">ActorName.txt</h1>
                </div>
                <div className="actor-content">
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2023/04/GettyImages-1473268742.jpg?w=1296&h=730&crop=1" alt="ActorImg" className="actor-image" />
                    <div className="actor-info">
                        <p>Год рождения: 21.03.1955</p>
                        <p>Страна: Уганда</p>
                        <p>Возраст: 69</p>
                    </div>
                </div>
                <div className="actor-information-div"> 
                    <div className="about-actor">
                        <h2 className="text-abt-actor">О актере</h2>
                        <hr /> 
                    </div>
                    <p className="actor-information">actorInformation.txt</p>
                </div>
                <div className="films">
                    <h2 className="films-title">Фильмы, в которых участвовал</h2>
                    <div className="films-list">
                        {films.map((film) => {
                            return <Film
                            id={film.id}
                            img={film.img}
                            genre={film.genre}
                            name={film.name}
                            key={film.id} />
                            })}
    
                    </div>
                </div>
        </div>

)}
