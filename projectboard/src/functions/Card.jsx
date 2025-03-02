function Card() {
    function handleNewCard() {
        fetch("http://127.0.0.1:5200/project/addcard", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: 1
            })
        })
    }

    return (
        <div>
            <div className="board-content content-a">
                <div className="board-tags">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                </div>
                <p className="dosis" contentEditable="true">Tesasdasdadssadasdasdasdasdadasdsadadadasdadasdsadasdsadadssadaaasdadasdadasdasdt</p>
            </div>
            <div className="board-content content-b">
                <div className="board-tags">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                </div>
                <p className="dosis" contentEditable="true">Test</p>
            </div>
            <div className="board-footer">
                <i className="fa-solid fa-plus"></i><i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    )
}

export default Card;