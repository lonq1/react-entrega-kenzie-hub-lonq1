import { UserContext } from "../../contexts/UserContext";

import { useContext } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../Button/style";
import { Form } from "../Form/style";
import { ModalContainer } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaModal } from "../../validations/modalUser";

interface ModalData {
    title: string;
    status: string;
    id: string;
}

export function Modal({
    setShowModal,
}: React.Dispatch<React.SetStateAction<boolean>> | any) {
    const { addTech, showAddModal, editTech, techs } = useContext(UserContext);

    const { register, handleSubmit } = useForm<ModalData>({
        resolver: yupResolver(schemaModal),
    });

    return (
        <ModalContainer>
            {showAddModal ? (
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
                                placeholder="Digite a tecnologia"
                            />
                        </div>

                        <div>
                            <label htmlFor="status">Status</label>
                            <select {...register("status")} id="status">
                                <option value="">Selecione o Status</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">
                                    Intermediário
                                </option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </div>

                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </section>
            ) : (
                <section>
                    <div className="modal__header">
                        <h3>Editar Tecnologia</h3>
                        <button onClick={() => setShowModal(false)}>X</button>
                    </div>
                    <Form onSubmit={handleSubmit(editTech)}>
                        <select id="id" {...register("id")}>
                            <option value="">Selecione a Tecnologia</option>
                            {techs.map((tech) => {
                                const { id, title } = tech;
                                return (
                                    <option key={id} value={id}>
                                        {title}
                                    </option>
                                );
                            })}
                        </select>
                        <select id="status" {...register("status")}>
                            <option value="">Selecione o Status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <Button type="submit">Editar</Button>
                    </Form>
                </section>
            )}
        </ModalContainer>
    );
}
