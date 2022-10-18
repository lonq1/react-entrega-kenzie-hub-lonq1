import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [techs, setTechs] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadProfile() {
            const token = localStorage.getItem("@tokenKenzieHub");
            if (token) {
                return await api
                    .get("/profile")
                    .then((resp) => {
                        setUser(resp.data);
                        setTechs(resp.data.techs);
                    })
                    .catch(() => {
                        localStorage.removeItem("@tokenKenzieHub");
                        localStorage.removeItem("@userIdKenzieHub");
                    });
            }
            navigate("/", { replace: true });
        }
        loadProfile();
    }, []);

    async function loginUser(data) {
        return await api
            .post("/sessions", data)
            .then((resp) => {
                toast.success(`Bem vindo! Redirecionando para Dashboard...`);
                localStorage.setItem("@tokenKenzieHub", resp.data.token);
                localStorage.setItem("@userIdKenzieHub", resp.data.user.id);
                setUser(resp.data.user);
                setTechs(resp.data.user.techs);
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

    async function addTech(data) {
        console.log("a");
        return await api
            .post("/users/techs", data)
            .then((resp) => {
                toast.success(`Tecnologia adicionada`);
                setTechs([...techs, resp.data]);
            })
            .catch((err) => toast.error(err.response.data.message));
    }

    async function removeTech(id) {
        const filteringTechs = techs.filter((tech) => tech.id !== id);

        await api.delete(`/users/techs/${id}`);
        setTechs(filteringTechs);
        toast.success("Removido com sucesso!", { autoClose: 1000 });
    }

    return (
        <UserContext.Provider
            value={{
                user,
                loginUser,
                registerUser,
                techs,
                addTech,
                removeTech,
                setShowModal,
                showModal,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
