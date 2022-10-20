import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "../../components/Form/style";
import { MainLogin } from "./style";
import { Button } from "../../components/Button/style";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { schemaDefault } from "../../validations/defaultUser";
import { iLoginUserProps } from "../../services/requests/loginRequest";
import { logo } from "../../assets/logoExport";

export function Login() {
    const { loginUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginUserProps>({ resolver: yupResolver(schemaDefault) });

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
                    <p className="form__error">{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        {...register("password")}
                        id="password"
                        placeholder="Digite sua senha"
                        type="password"
                    />
                    <p className="form__error">{errors.password?.message}</p>
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
