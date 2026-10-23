import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register(){
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email.trim().toLowerCase();
        const existingUser = localStorage.getItem(email);
        if (existingUser){
            return <p>User already exists</p>
        } else {
            const userData = {
                name: data.name.trim(),
                email: data.email,
                password: data.password,
                username: data.username,
                userId: crypto.randomUUID()
            };
            localStorage.setItem(email, JSON.stringify(userData));
            navigate("/login", { replace: true });
        }
    }

    return (
        <div>
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                 type="text"
                 {...register("name", { 
                     required: "Name is required",
                     validate: value => 
                        value.trim() !== "" || "Name cannot be empty"
                })}
                 placeholder="Name"
                />
                {errors.name && (
                    <span style={{ color: "red" }}>
                        {errors.name.message}
                    </span> 
                )}

                <input
                 type="email"
                 {...register("email", {
                     required: "Email is required",
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address"
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
                 type="text"
                 {...register("username", { 
                     required: "Username is required",
                     validate: value => 
                        value.trim() !== "" || "Username cannot be empty"
                })}
                 placeholder="Username"
                />
                {errors.username && (
                    <span style={{ color: "red" }}>
                        {errors.username.message}
                    </span> 
                )}

                <input
                 type="password"
                 {...register("password", { 
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                        message: "Password must contain an uppercase letter, a lowercase letter, and a number",
                    },

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
        </div>
    )


}

export default Register;