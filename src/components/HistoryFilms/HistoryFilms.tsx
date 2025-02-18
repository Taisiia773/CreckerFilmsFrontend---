import { Link } from "react-router-dom";
import { useHistoryContext } from "../context/historyContext"
import "./HistoryFilms.css"


export function HistoryFilms() {
	const {historyItems} = useHistoryContext()
    console.log(historyItems)

	return (
		<div className="historyFilms">
			{historyItems.map((historyItem) => {
				return (
                    <Link className="link-film" to={`/film/${historyItem.id}`}>
                        <div className="film" key={historyItem.id}>
                            <img src={historyItem.img} className="film-image" />
							<div className="film-text-div">
								<p className="name">{historyItem.name}</p>
							</div>
                        </div>
                    </Link>
				)
			})}
		</div>
	);
}