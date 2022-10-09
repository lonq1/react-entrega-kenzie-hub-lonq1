import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RoutesMain() {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
                }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
    );
}
