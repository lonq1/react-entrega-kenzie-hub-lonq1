import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "../../components/Form/style.js";
import { MainLogin } from "./style";
import * as yup from "yup";

import { Button } from "../../components/Button/style.js";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/style.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";

const schema = yup.object({
    email: yup
        .string()
        .required("Email é obrigatório")
        .email("Deve ser um e-mail válido"),
    password: yup.string().required("Senha é obrigatória"),
});

export function Login() {
    const { loginUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
        <MainLogin>
            <Header>
                <img src={logo} alt="Logo KenzieHub" />
            </Header>

            <Form onSubmit={handleSubmit(loginUser)}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email")}
                        id="email"
                        placeholder="Digite seu email"
                        type="text"
                    />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        {...register("password")}
                        id="password"
                        placeholder="Digite sua senha"
                        type="password"
                    />
                    <p>{errors.password?.message}</p>
                </div>
                <Button type="submit">Entrar</Button>
                <Link className="link__redirect" to="/register">
                    <p>Ainda não possui uma conta?</p>
                </Link>
                <Link className="btn__redirect" to="/register">
                    Cadastre-se
                </Link>
            </Form>
        </MainLogin>
    );
}
