import { Link } from "react-router-dom";

function NavBar(){

    return (
       <nav>
        <Link to="/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/add-event">Add Event</Link>
        {" |" }
        <Link to="/help">Help</Link>
       </nav>
    )

}

export default NavBar;