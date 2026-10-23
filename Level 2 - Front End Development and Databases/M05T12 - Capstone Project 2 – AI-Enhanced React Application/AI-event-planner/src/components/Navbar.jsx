import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar(){
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/login", { replace: true });
    }

    return (
         <nav>
            {currentUser ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    {" | "}
                    <Link to="/add-event">Add Event</Link>
                    {" | "}
                    <span>Welcome, {currentUser.name}</span>
                    {" | "}
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
                
            )}

            {" | "}
            <Link to="/help">Help</Link>
        </nav>
       
    );

}

export default NavBar;