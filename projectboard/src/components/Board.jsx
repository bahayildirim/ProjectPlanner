import { useQueryClient } from "@tanstack/react-query";
import Card from "./Card.jsx";
import ToggleVisibility from "../functions/ToggleVisibility.jsx";

function Board({title, renderFunc, index}) {
    const queryClient = useQueryClient();

    async function handleNewCard() {
        const response = await fetch("http://127.0.0.1:5200/project/addcard", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                board_title: title
            })
        })

        if(response.ok) {
            // Force re-fetch of cards
            queryClient.invalidateQueries(["cards", title]);
            renderFunc();
        } else {
            console.error("Failed to add card");
        }
    } 
    return (
        <div className="board">
            <div className="board-header league-spartan">
                <p>{title}</p>
            </div>
            <Card title={title}/>
            <div className="board-footer" id={"board-footer " + index}>
                <i className="fa-solid fa-plus" onClick={handleNewCard}></i>
                <i className="fa-solid fa-ellipsis" onClick={() =>ToggleVisibility("board-footer " + index, "flex")}></i>
                <p className="league-spartan hidden">Delete Board</p>
                <p className="league-spartan hidden">Change Title</p>
            </div>
        </div>
    )
}

export default Board;