async function GetBoards() {
    const response = await fetch("http://127.0.0.1:5200/project/getboards", {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();

    return data;
}

export default GetBoards;