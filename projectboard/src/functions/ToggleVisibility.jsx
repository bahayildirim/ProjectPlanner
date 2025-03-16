function ToggleVisibility(containerId, display) {
    var container = document.getElementById(containerId); // Get the specific container
    if (container) {
        var elements = container.querySelectorAll(".hidden"); // Get all elements with the "hidden" class
        elements.forEach(el => {
            if(el.style.display === "flex") {
                el.style.display = "none";
            } else {
                el.style.display = display;
            }
        });
    }
}

export default ToggleVisibility