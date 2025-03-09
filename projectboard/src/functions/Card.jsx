import { useQuery } from "@tanstack/react-query";
import GetCards from "./GetCards";
import Tags from "./Tags";

function Card({title}) {
    const { status, data, error } = useQuery({
        queryKey: ["cards", title],
        queryFn: () => GetCards(title)
    })

    let contentClass;

    // Render if fetch is complete

    if(status === "success") {
        return data.map((card, index) => {
            // Different colors for each tab

            if((index % 2) === 0) {
                contentClass = "board-content content-a";
            } else {
                contentClass = "board-content content-b";
            }
            
            return (
                <div className={contentClass} key={title + " " + index}>
                    <Tags tags={card.tags} />
                    <p className="dosis" >{card.text}</p>
                </div>
            )

        })
    }
    else {
        return null;
    }
}

export default Card;