import ToggleVisibility from "../functions/ToggleVisibility.jsx";

function Navbar() {
    return (
        <nav className="league-spartan-nav">
            <p>Project Planner</p>
            <ul>
                <li><button type="button">Projects</button></li>
                <li className="dropdown" id="dropdown">
                    <button type="button" onClick={() => ToggleVisibility("dropdown", "flex")}>Account<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="dropdown-content hidden">
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