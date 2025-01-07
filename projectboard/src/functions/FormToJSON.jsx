//TODO: Fix deprecated code

function formToJSON(url, method) {
    // Prevent page from refreshing
    event.preventDefault();

    // Convert form data to JSON
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    // Send form data to server
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
    })
    /*
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
    */
}

export default formToJSON;