import * as yup from "yup";

export const schemaModal = yup.object({
    title: yup.string().required("Nome é obrigatório"),
    status: yup.string().required("Status é obrigatório"),
});
