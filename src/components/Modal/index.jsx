import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { schemaModal } from "../../validations/modalUser";

import { Button } from "../Button/style";
import { Form } from "../Form/style";
import { ModalContainer } from "./style";

export function Modal() {
    const { addTech, setShowModal } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaModal) });

    return (
        <ModalContainer>
            <section>
                <div className="modal__header">
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <Form onSubmit={handleSubmit(addTech)}>
                    <label htmlFor="title">Nome</label>
                    <input
                        {...register("title")}
                        type="text"
                        id="title"
                        placeholder="Digite o nome da tecnologia"
                    />
                    <p>{errors.title?.message}</p>

                    <label htmlFor="status">Status</label>
                    <select {...register("status")} id="status">
                        <option value="">Selecione o Status</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <p>{errors.status?.message}</p>

                    <Button type="submit">Cadastrar Tecnologia</Button>
                </Form>
            </section>
        </ModalContainer>
    );
}
