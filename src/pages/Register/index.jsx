import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import * as yup from "yup";
import { toast } from "react-toastify";

import { MainRegister } from "./style";
import { Form } from "../../components/Form/style";
import { Button } from "../../components/Button/style";
import api from "../../services/api";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Global from "../../styles/global";
YupPassword(yup);
const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
        .string()
        .email("Deve ser um e-mail válido")
        .required("Email é obrigatório"),
    password: yup
        .string()
        .min(8, "No minimo 8 caracteres")
        .minNumbers(1, "Precisa conter ao menos um número")
        .matches(/[a-zA-Z]/, "Precisa conter ao menos uma letra")
        .required("Senha é obrigatória"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("Módulo é obrigatório"),
});

export function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    async function registerUser(data) {
        const responseData = await api
            .post("/users", data)
            .then((resp) => {
                toast.success(
                    `Olá ${resp.data.user.name}! Redirecionando para a página de Login...`
                );
                setTimeout(() => {
                    navigate("/");
                }, 2500);
            })
            .catch((err) => toast.error("Ops algo deu errado!"));
        reset();

        return responseData;
    }

    return (
        <MainRegister>
            <header>
                <img src={logo} alt="" />
                <Link to="/">Voltar</Link>
            </header>
            <Form onSubmit={handleSubmit(registerUser)}>
                <h2>Crie sua conta</h2>
                <p>Rápido e gratís, vamos nessa!</p>

                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        placeholder="Digite aqui seu nome"
                        type="text"
                        id="name"
                        {...register("name")}
                    />

                    <p>{errors.name?.message}</p>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Digite aqui seu email"
                        type="text"
                        id="email"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        placeholder="Digite aqui sua senha"
                        type="password"
                        id="password"
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>

                    <input
                        placeholder="Digite novamente sua senha"
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword")}
                    />
                    <p>{errors.confirmPassword?.message}</p>
                </div>

                <div>
                    <label htmlFor="bio">Bio</label>
                    <input
                        placeholder="Fale sobre você"
                        type="text"
                        id="bio"
                        {...register("bio")}
                    />
                    <p>{errors.bio?.message}</p>
                </div>

                <div>
                    <label htmlFor="contact">Contato</label>
                    <input
                        placeholder="Opção de contato"
                        type="text"
                        id="contact"
                        {...register("contact")}
                    />
                    <p>{errors.contact?.message}</p>
                </div>
                <div>
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select {...register("course_module")} id="course_module">
                        <option value="">Selecione o Módulo</option>
                        <option value="primeiro">Primeiro Módulo</option>
                        <option value="segundo">Segundo Módulo</option>
                    </select>
                    <p>{errors.course_module?.message}</p>
                </div>

                <Button>Cadastrar</Button>
            </Form>
        </MainRegister>
    );
}
