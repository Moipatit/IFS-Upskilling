import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";


function Login(){
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email.trim().toLowerCase();
        const storedUser = localStorage.getItem(email);
        const userData = storedUser ? JSON.parse(storedUser) : null;

        if (userData && userData.password === data.password){
            // Save only the user's public details in the session
            localStorage.setItem("currentUser", JSON.stringify({ name: userData.name, email: userData.email }));

            // Navigate to the dashboard
            navigate("/dashboard", { replace: true });
        } else {
            console.log("Email or Password is incorrect")
        }
    };

    return (
        <div>
            <h2>Login page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                 type="email"
                 {...register("email", { 
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                    },
                 })}
                 placeholder="Email"
                />
                {errors.email && (
                    <span style={{ color: "red" }}>
                        {errors.email.message}
                    </span> 
                )}

                <input
                 type="password"
                 {...register("password", { 
                    required: "Password is required" 
                })}
                 placeholder="Password"
                />
                {errors.password && (
                    <span style={{ color: "red" }}>
                        {errors.password.message}
                    </span> 
                    )}
                <input type="submit"/>

            </form>
            <Link to="/register">New user, Register here</Link>

        </div>
    )

}

export default Login;
