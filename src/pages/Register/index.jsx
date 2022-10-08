import { useForm } from "react-hook-form";
import { Form } from "../../components/Form/style";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
        .string()
        .email("Deve ser um e-mail válido")
        .required("Email é obrigatório"),
    password: yup
        .string()
        .min(8, "No minimo 8 caracteres")
        .required("Senha é obrigatória"),
    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref("password")],
            "Confirmação de senha deve ser igual a senha"
        ),
});

export function Register() {
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm({ resolver: yupResolver(schema) });

    // function registerUser(data) {
    //     console.log(data);
    //     reset();
    // }

    return (
        <Form>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />

            <label htmlFor="password-confirm">Confirmar Senha</label>
            <input type="password" id="password-confirm" />

            <label htmlFor="bio">Bio</label>
            <input type="text" id="bio" />

            <label htmlFor="contact">Contato</label>
            <input type="text" id="contact" />

            <label htmlFor="modulo">Selecionar módulo</label>
            <select id="modulo">
                <option value="">Selecione o Módulo</option>
                <option value="primeiro">Primeiro Módulo</option>
                <option value="segundo">Segundo Módulo</option>
            </select>
        </Form>
    );
}
