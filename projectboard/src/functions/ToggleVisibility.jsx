function ToggleVisibility(containerId, display) {
    var container = document.getElementById(containerId); // Get the specific container
    if (container) {
        var elements = container.querySelectorAll(".hidden"); // Get ALL matching elements inside the container
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