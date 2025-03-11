import "../css/Project.css";
import { useEffect, useState } from "react";
import {DropdownShow} from "../functions/Dropdown.jsx";
import SessionAuth from "../functions/SessionAuth.jsx";
import { useNavigate } from "react-router-dom";
import Board from "../functions/Board.jsx";
import NewBoard from "../functions/NewBoard.jsx";
import GetBoards from "../functions/GetBoards.jsx";
    
const Project = () => {
    // Create navigate function
    let navigate = useNavigate();

    // Variable to show/hide page
    let [authenticated, setAuthenticated] = useState(false);
    let [boards, setBoards] = useState([]);
    let [reRender, setReRender] = useState(false);

    function forceRender() {
        setReRender(!reRender);
    }

    // Run before render
    useEffect(() => {
        // Check for authentication before loading, redirect to login page if not authenticated
        SessionAuth().then(response => {
            if(response) {
                setAuthenticated(true);
                GetBoards().then(response => {
                    setBoards(response);
                })
            } else {
                navigate("/login");
            }
        }) 
    }, [reRender])

    if(authenticated) {
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
                    {boards.map((board, index) => {
                        return <Board key={board.board_user + " " + board.board_order} title={board.title} index={index} renderFunc={forceRender}/>
                    })
                    }
                    <NewBoard renderFunc={forceRender}/>
                </div>
            </div>
        );
    } else {
        return null;
    }

};

export default Project