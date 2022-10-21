import { iTech } from "../../contexts/UserContext";
import api from "../api";

export interface iRegisterUserProps {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}
export interface iRegisterUserResponse {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs?: iTech[];
    works?: [];
}

export async function registerRequest(
    dataInput: iRegisterUserProps
): Promise<iRegisterUserResponse> {
    const { data } = await api.post<iRegisterUserResponse>("/users", dataInput);

    return data;
}
