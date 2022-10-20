import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { schemaModal } from "../../validations/modalUser";

import { Button } from "../Button/style";
import { Form } from "../Form/style";
import { ModalContainer } from "./style";

interface ModalData {
    title: string;
    status: string;
}

export function Modal() {
    const { addTech, setShowModal } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ModalData>({ resolver: yupResolver(schemaModal) });

    return (
        <ModalContainer>
            <section>
                <div className="modal__header">
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <Form onSubmit={handleSubmit(addTech)}>
                    <div>
                        <label htmlFor="title">Nome</label>
                        <input
                            {...register("title")}
                            type="text"
                            id="title"
                            placeholder="Digite o nome da tecnologia"
                        />
                        <p className="form__error ">{errors.title?.message}</p>
                    </div>

                    <div>
                        <label htmlFor="status">Status</label>
                        <select {...register("status")} id="status">
                            <option value="">Selecione o Status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <p className="form__error ">{errors.status?.message}</p>
                    </div>

                    <Button type="submit">Cadastrar Tecnologia</Button>
                </Form>
            </section>
        </ModalContainer>
    );
}
