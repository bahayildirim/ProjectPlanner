function Card() {
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