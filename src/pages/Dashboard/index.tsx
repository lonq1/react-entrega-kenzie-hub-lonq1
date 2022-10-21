import { Header } from "../../components/Header/style";
import { MainDashboard } from "./style";

import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { Button } from "../../components/Button/style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BsFillTrashFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Modal } from "../../components/Modal";
import { logo } from "../../assets/logoExport";
import { toast } from "react-toastify";

export function Dashboard() {
    const {
        user,
        techs,
        removeTech,
        setShowAddModal,
        showAddModal,
        setShowEditModal,
        showEditModal,
    } = useContext(UserContext);
    const { name, course_module } = user;
    return (
        <>
            {showAddModal && <Modal setShowModal={setShowAddModal} />}
            {showEditModal && <Modal setShowModal={setShowEditModal} />}

            <MainDashboard>
                <Header>
                    <div>
                        <img src={logo} alt="Logo KenzieHub" />

                        <Link
                            onClick={() => {
                                localStorage.removeItem("@tokenKenzieHub");
                                localStorage.removeItem("@userIdKenzieHub");
                            }}
                            className="btn__redirect"
                            to="/"
                        >
                            Sair
                        </Link>
                    </div>
                </Header>

                <section className="user__info">
                    <div>
                        <h2>Olá, {name}</h2>
                        <p>{course_module}</p>
                    </div>
                </section>

                <section className="tech__section">
                    <div>
                        <h2>Tecnologias</h2>
                        <div className="tech__btns-container">
                            <Button
                                backgroundColor="transparent"
                                onClick={() => {
                                    if (!techs.length) {
                                        toast.error(
                                            "Você não possui tecnologias cadastradas"
                                        );
                                    } else {
                                        setShowEditModal(true);
                                    }
                                }}
                            >
                                <AiOutlineEdit className="plus__sign" />
                            </Button>
                            <Button
                                className="add__btn"
                                onClick={() => setShowAddModal(true)}
                                backgroundColor="transparent"
                            >
                                <AiOutlinePlus className="plus__sign" />
                            </Button>
                        </div>
                    </div>

                    {techs.length ? (
                        <ul>
                            {techs.map((tech) => {
                                const { title, status, id } = tech;

                                return (
                                    <li className="tech__card" key={tech.id}>
                                        <h3>{title}</h3>
                                        <div>
                                            <p>{status}</p>

                                            <BsFillTrashFill
                                                className="delete__btn"
                                                onClick={() => {
                                                    removeTech(id);
                                                }}
                                            />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <h3 className="title__tech--empty">
                            Você não possui nenhuma tecnologia cadastrada, que
                            tal adicionar algumas ?
                            <FaReact className="tech__empty--image" />
                        </h3>
                    )}
                </section>
            </MainDashboard>
        </>
    );
}
