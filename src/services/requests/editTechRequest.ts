import api from "../api";
export interface editTechRequestProps {
    id: string;
    status: string;
}

interface iEditTechResponse {
    status: string;
    title: string;
    id: string;
}
export async function editTechRequest(
    dataInput: editTechRequestProps
): Promise<iEditTechResponse> {
    const { id, status } = dataInput;
    const { data } = await api.put(`/users/techs/${id}`, {
        status: status,
    });

    return data;
}
