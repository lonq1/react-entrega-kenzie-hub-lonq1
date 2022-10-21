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
import { loadProfileRequest } from "../services/requests/loadProfile";
import {
    editTechRequest,
    editTechRequestProps,
} from "../services/requests/editTechRequest";

export interface iUser extends iRegisterUserResponse {}
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
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
    showAddModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    showEditModal: boolean;
    editTech: (dataInput: editTechRequestProps) => Promise<void>;
}

export const UserContext = createContext<iUserContextProps>(
    {} as iUserContextProps
);

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser>({} as iUser);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [techs, setTechs] = useState<iTech[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadProfile(): Promise<void> {
            const token = localStorage.getItem("@tokenKenzieHub");
            if (token) {
                try {
                    const data = await loadProfileRequest();
                    navigate("/dashboard", { replace: true });
                    setUser(data);
                    setTechs(data.techs);
                } catch (err) {
                    localStorage.removeItem("@tokenKenzieHub");
                    localStorage.removeItem("@userIdKenzieHub");
                }
            } else {
                navigate("/", { replace: true });
            }
        }
        loadProfile();
    }, []);

    async function loginUser(dataInput: iLoginUserProps): Promise<void> {
        try {
            toast.success(`Bem vindo! Redirecionando para Dashboard...`, {
                autoClose: 1100,
            });
            const data = await loginRequest(dataInput);

            const { user, token } = data;
            localStorage.setItem("@tokenKenzieHub", token);
            localStorage.setItem("@userIdKenzieHub", user.id);
            setUser(user);
            setTechs(user.techs);
            setTimeout(() => {
                navigate("/dashboard");
            }, 1500);
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
            setTechs([...techs, data]);
            toast.success(`Tecnologia: ${data.title} adicionada`);
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

    async function editTech(dataInput: editTechRequestProps): Promise<void> {
        try {
            const data = await editTechRequest(dataInput);
            const { id } = data;
            const filtering = techs.filter((tech) => tech.id !== id);
            setTechs([...filtering, data]);
            toast.success("Editado com sucesso!", { autoClose: 1000 });
        } catch (err) {
            if (axios.isAxiosError(err))
                toast.error(err.response?.data.message);
        }
    }

    return (
        <UserContext.Provider
            value={{
                user,
                loginUser,
                registerUser,
                techs,
                addTech,
                editTech,
                removeTech,
                setShowAddModal,
                setShowEditModal,
                showEditModal,
                showAddModal,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
