// Check if session is authenticated
async function SessionAuth() {
    // Fetch from API
    const response = await fetch("http://127.0.0.1:5200/auth", {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Convert to text
    const auth = await response.text();

    // Convert back into bool
    return auth === 'true';
}

export default SessionAuth;