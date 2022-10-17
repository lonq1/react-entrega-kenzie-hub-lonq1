import { Route, Routes } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard" element={<Modal />} />
        </Routes>
    );
}
