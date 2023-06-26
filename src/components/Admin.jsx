import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const Admin = () => {

    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
       
    };

    const signOutAuth = async () => {
        try {
            await logout();
            navigate("/");
            console.log("You are logged out");
        } catch(error) {
            console.log(error);
        }
    };

    return(
    <>
        <Navbar bg={"[#E09A32]"} />
        <div className="justify-center items-center flex w-full h-screen">
            <form className="md:w-[400px] lg:w-[400px] xl:w-[400px] sm:w-[300px] w-[350px] mx-auto bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">{loggedIn ? "Already logged in" : "Login"}</h2>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="email">Email:</label>
                    <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="password">Password:</label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                    onClick={loggedIn ? e => signOutAuth(e) : e => signIn(e)}
                    >
                    {loggedIn ? "Sign out" : "Login"}
                    </button>
                </div>
            </form>
        </div>
        <p>{user ? user.email : ""}</p>
    </>
    );
};

export default Admin;