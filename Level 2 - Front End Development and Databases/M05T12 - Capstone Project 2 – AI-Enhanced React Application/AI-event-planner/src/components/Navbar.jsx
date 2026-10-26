
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login", { replace: true });
    }

    return (
        <nav className="app-navbar">
            <Link
                to={currentUser ? "/dashboard" : "/login"}
                className="app-brand"
            >
                Gather.
            </Link>

            <div className="nav-links">
                {currentUser ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/add-event">Add Event</Link>
                        <Link to="/help">Help</Link>

                        <span className="nav-welcome">
                            Hi, {currentUser.name}
                        </span>

                        <button
                            type="button"
                            className="nav-logout"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

            </div>
        </nav>
    );
}

export default NavBar;
