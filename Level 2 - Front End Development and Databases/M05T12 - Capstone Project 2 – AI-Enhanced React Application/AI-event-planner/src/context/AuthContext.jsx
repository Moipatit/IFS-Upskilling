import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }){
    // Stores the currently logged in user's public details
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("currentUser");
            return storedUser ? JSON.parse(storedUser) : null;
        } catch {
            return null
        }
    });

    // checks the registered account and updates React state and localStorage
    function login(email, password){
        const normalizedEmail = email.trim().toLowerCase();
        const storedUser = localStorage.getItem(normalizedEmail);

        let userData = null;

        try {
            userData = storedUser ? JSON.parse(storedUser) : null;
        } catch {
            userData = null;
        }

        if (!userData || userData.password !== password){
            return {
                success: false, 
                message: "Email or password is incorrect."
            };
        }

        console.log("Registered user ID:", userData.userId);
        console.log("Normalized email:", normalizedEmail);

        // Store the public user details in the session
        const publicUser = {
            userId: userData.userId,
            name: userData.name,
            email: normalizedEmail
        };

        console.log("Public user:", publicUser);

        localStorage.setItem("currentUser", JSON.stringify(publicUser));

        setCurrentUser(publicUser);

        return { success: true };
    }

    // Clears the current session
    function logout(){
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
    }


    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Allows the other components to access the authentication context
export function useAuth(){
    const context = useContext(AuthContext);

    if (context === null){
        throw new Error("useAuth must be inside AuthProvider")
    }

    return context;
}