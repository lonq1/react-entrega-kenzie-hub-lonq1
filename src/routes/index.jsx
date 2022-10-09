import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RoutesMain() {
    const [user, setUser] = useState();
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>
    );
}
