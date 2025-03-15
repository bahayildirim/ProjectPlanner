import DropdownShow from "../functions/Dropdown.jsx";

function Navbar() {
    return (
        <nav className="league-spartan-nav">
            <p>Project Planner</p>
            <ul>
                <li><button type="button">Projects</button></li>
                <li className="dropdown">
                    <button type="button" onClick={DropdownShow}>Account<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="dropdown-content" id="dropdownContent">
                        <a>Button 1</a>
                        <a>Button 2</a>
                        <a>Button 3</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar