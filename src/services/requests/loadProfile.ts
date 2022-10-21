import { iUser } from "../../contexts/UserContext";
import api from "../api";

export async function loadProfileRequest(): Promise<iUser> {
    const { data } = await api.get<iUser>("/profile");

    return data;
}
