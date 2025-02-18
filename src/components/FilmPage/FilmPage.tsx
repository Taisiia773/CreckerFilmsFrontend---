import { useParams } from "react-router-dom"
import { useFilmById } from "../../hooks/useFilmById"
import { TailSpin } from "react-loader-spinner"
import "./FilmPage.css"
import { useGenresById } from "../../hooks/useGenres"

export function FilmPage(){
   const params = useParams()
//    const {film, error, loading} = useFilmById(Number(params.id))
//    const id = film?.genreId
//    console.log(id)
//    const {genre} = useGenresById(id)
//    console.log(id)
    const { film, error, loading } = useFilmById(Number(params.id))
    const genreId = film?.genreId
    const { genre } = useGenresById(genreId)
    console.log("Genre ID:", genreId)
    console.log("Genre:", genre?.name)

   return(
    <div>
        {loading === true ? 
            <div className="product-loader">
                <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        /></div> : 
            error !== "" ? <div>
                {error} 
            </div> :
            
            <div className="film-container">
                <div className="film-name-div">
                    <h1 className="film-name">{film?.name}</h1>
                </div>
                <div className="film-content">
                    <img src={film?.img} alt="Product" className="film-image" />
                    <div className="film-info">
                        <p className="film-rating">Рейтинг: {film?.rating}</p>
                        <p className="film-year">Год релиза: {film?.year}</p>
                        <p className="film-language">Язык: {film?.language}</p>
                        <p className="film-country">Страна: {film?.country}</p>
                        <p className="film-age">Возраст: {film?.age}</p>
                        <p className="film-genre">Жанр: {genre?.name}</p>
                    </div>
                </div>
                {/* о фильме */}
                <div className="film-information-div"> 
                    <div className="about-film">
                        <h2 className="text-abt-film">О фильме</h2>
                        <hr /> 
                    </div>
                    <p className="film-information">{film?.information}</p>
                </div> <br /> <br />
                <div className="film-images">
                    <img src={film?.filmImage} alt="Product" className="film-images" />
                </div> <br /> <br />
                <div className="film-some-facts">
                    <p className="film-someFacts">{film?.someFacts}</p>
                </div>
                <div className="comments">
                    <div className="comment-one">
                        Ура мне куnили машинку лего
                    </div>
                </div>
        </div>}
    </div>
   )
}