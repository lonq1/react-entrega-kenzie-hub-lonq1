import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    async function loginUser(data) {
        return await api
            .post("/sessions", data)
            .then((resp) => {
                toast.success(`Bem vindo! Redirecionando para Dashboard...`);
                localStorage.setItem("@tokenKenzieHub", resp.data.token);
                localStorage.setItem("@userIdKenzieHub", resp.data.user.id);
                setUser(resp.data.user);
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2500);
            })
            .catch((err) => toast.error(err.response.data.message));
    }

    async function registerUser(data) {
        const responseData = await api
            .post("/users", data)
            .then((resp) => {
                console.log(resp.data);
                toast.success(
                    `Olá ${resp.data.name}! Redirecionando para a página de Login...`
                );
                setTimeout(() => {
                    navigate("/");
                }, 2500);
            })
            .catch((err) => toast.error(err.response.data.message));

        return responseData;
    }

    return (
        <UserContext.Provider value={{ user, loginUser, registerUser }}>
            {children}
        </UserContext.Provider>
    );
}
