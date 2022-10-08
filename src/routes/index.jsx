import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";

export function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Register />}></Route>
        </Routes>
    );
}
