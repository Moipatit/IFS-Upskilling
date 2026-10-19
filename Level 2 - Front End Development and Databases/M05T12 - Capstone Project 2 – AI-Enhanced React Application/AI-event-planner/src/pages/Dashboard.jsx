import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login", { replace: true });
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Welcome, {currentUser?.name}</h2>

            <p> You have successfully logged in</p>

            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}
export default Dashboard;