import { Header } from "../../components/Header/style";
import { MainDashboard } from "./style";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../../components/Button/style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Dashboard() {
    const { user } = useContext(UserContext);

    return (
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

            <section>
                <div>
                    <h3>Tecnologias</h3>
                    <Button backgroundColor="transparent">
                        <AiOutlinePlus className="plus__sign" />
                    </Button>
                </div>

                <ul></ul>
            </section>
        </MainDashboard>
    );
}
