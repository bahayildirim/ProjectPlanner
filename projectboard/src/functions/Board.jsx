import Card from "../functions/Card.jsx";

function Board({title}) {
    return (
        <div className="board">
            <div className="board-header league-spartan">
                <p>{title}</p>
            </div>
            <Card />
        </div>

    )
}

export default Board;