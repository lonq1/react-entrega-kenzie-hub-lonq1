import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MainRegister } from "./style";
import { Form } from "../../components/Form/style";
import { Button } from "../../components/Button/style";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { schemaRegister } from "../../validations/registerUser";
import { useContext } from "react";
import { logo } from "../../assets/logoExport";
import { iRegisterUserProps } from "../../services/requests/registerRequest";

export function Register() {
    const { registerUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iRegisterUserProps>({ resolver: yupResolver(schemaRegister) });

    return (
        <MainRegister>
            <header>
                <img src={logo} alt="Logo KenzieHub" />
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

                    <p className="form__error">{errors.name?.message}</p>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Digite aqui seu email"
                        type="text"
                        id="email"
                        {...register("email")}
                    />
                    <p className="form__error">{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        placeholder="Digite aqui sua senha"
                        type="password"
                        id="password"
                        {...register("password")}
                    />
                    <p className="form__error">{errors.password?.message}</p>
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>

                    <input
                        placeholder="Digite novamente sua senha"
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword")}
                    />
                    <p className="form__error">
                        {errors.confirmPassword?.message}
                    </p>
                </div>

                <div>
                    <label htmlFor="bio">Bio</label>
                    <input
                        placeholder="Fale sobre você"
                        type="text"
                        id="bio"
                        {...register("bio")}
                    />
                    <p className="form__error">{errors.bio?.message}</p>
                </div>

                <div>
                    <label htmlFor="contact">Contato</label>
                    <input
                        placeholder="Opção de contato"
                        type="text"
                        id="contact"
                        {...register("contact")}
                    />
                    <p className="form__error">{errors.contact?.message}</p>
                </div>
                <div>
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select {...register("course_module")} id="course_module">
                        <option value="">Selecione o Módulo</option>
                        <option value="Primeiro módulo (FrontEnd Iniciante)">
                            Primeiro Módulo
                        </option>
                        <option value="Segundo módulo (FrontEnd Avançado)">
                            Segundo Módulo
                        </option>
                    </select>
                    <p className="form__error">
                        {errors.course_module?.message}
                    </p>
                </div>

                <Button type="submit">Cadastrar</Button>
            </Form>
        </MainRegister>
    );
}
