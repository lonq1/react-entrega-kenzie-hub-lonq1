import { Header } from "../../components/Header/style";
import { MainDashboard } from "./style";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../../components/Button/style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Modal } from "../../components/Modal";

export function Dashboard() {
    const { user, removeTech, setShowModal, showModal, techs } =
        useContext(UserContext);

    return (
        <>
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
                        <h2>Olá, {user.name}</h2>
                        <p>{user.course_module}</p>
                    </div>
                </section>

                <section className="tech__section">
                    <div>
                        <h3>Tecnologias</h3>
                        <Button
                            className="add__btn"
                            onClick={() => setShowModal(true)}
                            backgroundColor="transparent"
                        >
                            <AiOutlinePlus className="plus__sign" />
                        </Button>
                    </div>

                    <ul>
                        {techs ? (
                            techs.map((tech) => (
                                <li className="tech__card" key={tech.id}>
                                    <h3>{tech.title}</h3>
                                    <div>
                                        <p>{tech.status}</p>

                                        <BsFillTrashFill
                                            className="delete__btn"
                                            onClick={() => {
                                                removeTech(tech.id);
                                            }}
                                        />
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h2>Loading...</h2>
                        )}
                    </ul>
                </section>
            </MainDashboard>

            {showModal && <Modal />}
        </>
    );
}
