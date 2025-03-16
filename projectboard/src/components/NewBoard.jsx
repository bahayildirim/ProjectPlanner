function NewBoard({renderFunc}) {
    function handleNewBoard() {
        fetch("http://127.0.0.1:5200/project/addboard", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        renderFunc();
    }

    return (
        <div className="board board-new">
            <p className="league-spartan">New Board</p><i onClick={handleNewBoard} className="fa-solid fa-plus"></i>
        </div>
    )
}

export default NewBoard;