// Check if session is authenticated
async function SessionAuth() {
    // Fetch from API
    const response = await fetch("http://localhost:5200/auth");

    // Convert to JSON
    const auth = await response.json();

    return auth;
}

export default SessionAuth;