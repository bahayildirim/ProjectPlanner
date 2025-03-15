function DropdownShow(event) {
    const dropdown = event.currentTarget.nextElementSibling; // Get the adjacent dropdown
    if (dropdown && dropdown.classList.contains("dropdown-content")) {
        if(dropdown.style.display === "flex") {
            dropdown.style.display = "none"
        } else {
            dropdown.style.display = "flex"
        }
    }
}

export default DropdownShow;