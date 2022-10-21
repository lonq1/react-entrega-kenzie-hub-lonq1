import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes";
import Global from "./styles/global";
import { UserProvider } from "./contexts/UserContext";

function App() {
    return (
        <>
            <ToastContainer autoClose={1500} />
            <Global />
            <UserProvider>
                <RoutesMain />
            </UserProvider>
        </>
    );
}

export default App;
