import Card from "../functions/Card.jsx";

function Board({title, index}) {
    return (
        <div className="board">
            <div className="board-header league-spartan">
                <p>{title}</p>
            </div>
            <Card title={title}/>
            <div className="board-footer">
                <i className="fa-solid fa-plus"></i><i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    )
}

export default Board;