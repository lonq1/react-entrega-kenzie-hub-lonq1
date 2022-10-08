import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom/dist";
import { MainLogin } from "./style";
import * as yup from "yup";
const schema = yup.object({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
});
export function Login() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
        <MainLogin>
            <h2>Login</h2>
            <Form>
                <div></div>
            </Form>
        </MainLogin>
    );
}
