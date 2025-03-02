function NewBoard() {
    function handleNewBoard() {
        fetch("http://127.0.0.1:5200/project/addboard", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: 3
            })
        })
    }

    return (
        <div className="board board-new">
            <p className="league-spartan">New Board</p><i onClick={handleNewBoard} className="fa-solid fa-plus"></i>
        </div>
    )
}

export default NewBoard;