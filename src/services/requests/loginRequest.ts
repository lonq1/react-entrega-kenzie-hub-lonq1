import { iTech } from "../../contexts/UserContext";
import api from "../api";

export interface iLoginUserProps {
    email: string;
    password: string;
}

export interface iLoginUserResponse {
    user: {
        id: string;
        name: string;
        email: string;
        course_module: string;
        bio: string;
        contact: string;
        techs: iTech[];
        works?: [];
    };
    token: string;
}

export async function loginRequest(
    dataInput: iLoginUserProps
): Promise<iLoginUserResponse> {
    const { data } = await api.post<iLoginUserResponse>("/sessions", dataInput);

    return data;
}
