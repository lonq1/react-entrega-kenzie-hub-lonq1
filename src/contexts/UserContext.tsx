/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import {
    iLoginUserProps,
    loginRequest,
} from "../services/requests/loginRequest";
import {
    iRegisterUserProps,
    iRegisterUserResponse,
    registerRequest,
} from "../services/requests/registerRequest";
import {
    addTechRequest,
    iAddTechProps,
    iAddTechResponse,
} from "../services/requests/addTechRequest";

interface iUser extends iRegisterUserResponse {}
export interface iTech extends iAddTechResponse {}

interface iUserProviderProps {
    children: ReactNode;
}
interface iUserContextProps {
    user: iUser;
    loginUser: (dataInput: iLoginUserProps) => Promise<void>;
    registerUser: (dataInput: iRegisterUserProps) => Promise<void>;
    techs: iTech[];
    addTech: (dataInput: iAddTechProps) => Promise<void>;
    removeTech: (id: string) => Promise<void>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
}

export const UserContext = createContext<iUserContextProps>(
    {} as iUserContextProps
);

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser>({} as iUser);
    const [showModal, setShowModal] = useState(false);
    const [techs, setTechs] = useState<iTech[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadProfile(): Promise<void> {
            const token = localStorage.getItem("@tokenKenzieHub");
            if (token) {
                return await api
                    .get("/profile")
                    .then((resp) => {
                        setUser(resp.data);
                        setTechs(resp.data.techs);
                        navigate("/dashboard", { replace: true });
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

    async function loginUser(dataInput: iLoginUserProps): Promise<void> {
        try {
            const data = await loginRequest(dataInput);
            const { user, token } = data;
            toast.success(`Bem vindo! Redirecionando para Dashboard...`);
            localStorage.setItem("@tokenKenzieHub", token);
            localStorage.setItem("@userIdKenzieHub", user.id);
            setUser(user);
            setTechs(user.techs);
            setTimeout(() => {
                navigate("/dashboard");
            }, 2500);
        } catch (err) {
            if (axios.isAxiosError(err))
                toast.error(err.response?.data.message);
        }
    }

    async function registerUser(dataInput: iRegisterUserProps): Promise<void> {
        try {
            const data = await registerRequest(dataInput);
            const { name } = data;
            toast.success(
                `Olá ${name}! Redirecionando para a página de Login...`
            );
            setTimeout(() => {
                navigate("/");
            }, 2500);
        } catch (err) {
            if (axios.isAxiosError(err))
                toast.error(err.response?.data.message);
        }
    }

    async function addTech(dataInput: iAddTechProps): Promise<void> {
        try {
            const data = await addTechRequest(dataInput);
            toast.success(`Tecnologia adicionada`);
            setTechs([...techs, data]);
        } catch (err) {
            if (axios.isAxiosError(err))
                toast.error(err.response?.data.message);
        }
    }

    async function removeTech(id: string): Promise<void> {
        const filteringTechs = techs.filter((tech: iTech) => tech.id !== id);
        setTechs(filteringTechs);

        toast.success("Removido com sucesso!", { autoClose: 1000 });
        await api.delete<void>(`/users/techs/${id}`);
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
