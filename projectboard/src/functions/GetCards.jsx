async function GetCards(title) {
    const response = await fetch("http://127.0.0.1:5200/project/getcards", {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            board_title: title
        })
    })

    const data = await response.json();

    return data;
}

export default GetCards;