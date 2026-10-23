import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


function Login(){
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    // Logging in using the authcontext
    const onSubmit = (data) => {
        setLoginError("")
        
        const result = login(data.email, data.password);

        if (result.success){
            navigate("/dashboard", { replace: true });
        } else {
            setLoginError(result.message);
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

                {loginError && (
                    <p role="alert" style={{ color: "red"}}>
                        {loginError}
                    </p>
                )}
                <input type="submit" value="Log in"/>

            </form>
            <Link to="/register">New user, Register here</Link>

        </div>
    )

}

export default Login;
