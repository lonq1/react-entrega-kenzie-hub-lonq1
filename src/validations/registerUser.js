import YupPassword from "yup-password";
import * as yup from "yup";

YupPassword(yup);
export const schemaRegister = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
        .string()
        .email("Deve ser um e-mail válido")
        .required("Email é obrigatório"),
    password: yup
        .string()
        .required("Senha é obrigatória")
        .min(8, "No minimo 8 caracteres")
        .minNumbers(1, "Precisa conter ao menos um número")
        .matches(/[a-zA-Z]/, "Precisa conter ao menos uma letra"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("Módulo é obrigatório"),
});
