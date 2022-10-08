import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes";
import { Global } from "./styles/global";

function App() {
    return (
        <>
            <Global />
            <RoutesMain />
            <ToastContainer autoClose={1200} />
        </>
    );
}

export default App;
