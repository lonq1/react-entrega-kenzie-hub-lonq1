import api from "../api";

export interface iAddTechResponse {
    id: string;
    title: string;
    status: string;
}
export interface iAddTechProps {
    title: string;
    status: string;
}

export async function addTechRequest(
    dataInput: iAddTechProps
): Promise<iAddTechResponse> {
    const { data } = await api.post("/users/techs", dataInput);

    return data;
}
