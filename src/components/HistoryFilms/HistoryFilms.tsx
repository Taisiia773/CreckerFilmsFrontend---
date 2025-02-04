import { Link } from "react-router-dom";
import { useHistoryContext } from "../context/historyContext"


export function HistoryFilms() {
	const {historyItems} = useHistoryContext()
    console.log(historyItems)

	return (
		<div>
			{historyItems.map((historyItem) => {
				return (
                    <Link to={`/film/${historyItem.id}`}>
                        <div key={historyItem.id}>
                            <h1>{historyItem.name}</h1>
                            <img src={historyItem.img} />
                        </div>
                    </Link>
				)
			})}
		</div>
	);
}