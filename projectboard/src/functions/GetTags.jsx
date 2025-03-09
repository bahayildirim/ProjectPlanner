function GetTags() {
    fetch("http://127.0.0.1:5200/project/gettags", {
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

export default GetTags;