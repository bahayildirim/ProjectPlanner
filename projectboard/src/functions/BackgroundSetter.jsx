function BackgroundSetter() {
    // Get the current URL
    const currentURL = window.location.pathname;

    // Check the current endpoint and apply the corresponding background
    if ((currentURL === "/login") || (currentURL === "/register")) {
        document.body.style.backgroundImage = "linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--primary-color))";
    } else {
        document.body.style.backgroundImage = "none"; // Reset the background for other endpoints
    }
}

export default BackgroundSetter