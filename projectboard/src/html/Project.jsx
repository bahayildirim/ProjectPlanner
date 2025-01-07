import "../css/Project.css";
import {DropdownShow} from "../functions/Dropdown.jsx";

const Project = () => {
    return (
        <div className="project">
            <aside>
                <div className="dropdown">
                    <button className="league-spartan" onClick={DropdownShow}>Views<i className="fa-solid fa-chevron-down sidebar-top"></i></button>
                    <ul className="dropdown-content" id="dropdownContent">
                        <li><button className="league-spartan">Board</button></li>
                        <li><button className="league-spartan">Gantt Chart</button></li>
                    </ul>
                </div> 
                <div className="dropdown">
                    <button className="league-spartan" onClick={DropdownShow}>Filter By<i className="fa-solid fa-chevron-down sidebar-top"></i></button>
                    <ul className="dropdown-content" id="dropdownContent">
                        <li><button className="league-spartan"><i className="fa-solid fa-circle"></i>Tag 1</button></li>
                        <li><button className="league-spartan"><i className="fa-solid fa-circle"></i>Tag 2</button></li>
                        <li><button className="league-spartan"><i className="fa-solid fa-circle"></i>Tag 3</button></li>
                    </ul>
                </div> 
            </aside>
            <div className="board-container">
                <div className="board">
                    <div className="board-header league-spartan">
                        <p>Title</p>
                    </div>
                    <div className="board-content content-a">
                        <div className="board-tags">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <p className="dosis" contentEditable="true">Tesasdasdadssadasdasdasdasdadasdsadadadasdadasdsadasdsadadssadaaasdadasdadasdasdt</p>
                    </div>
                    <div className="board-content content-b">
                        <div className="board-tags">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <p className="dosis" contentEditable="true">Test</p>
                    </div>
                    <div className="board-footer">
                        <i className="fa-solid fa-plus"></i><i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className="board">
                    <div className="board-header league-spartan">
                        <p>Title</p>
                    </div>
                    <div className="board-content content-a">
                        <div className="board-tags">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <p className="dosis" contenteditable="true">Tesasdasdadssadasdasdasdasdadasdsadadadasdadasdsadasdsadadssadaaasdadasdadasdasdt</p>
                    </div>
                    <div className="board-content content-b">
                        <div className="board-tags">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <p className="dosis" contentEditable="true">Test</p>
                    </div>
                    <div className="board-footer">
                        <i className="fa-solid fa-plus"></i><i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className="board board-new">
                    <p className="league-spartan">New Board</p><i className="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Project