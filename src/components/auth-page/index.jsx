import {useLocation} from "react-router-dom";
import LoginPage from "./login/LoginPage.jsx";
import RegisterPage from "./register/RegisterPage.jsx";

const AuthRootComponent = () => {
    const location = useLocation()
    return (location.pathname === '/login' ? <LoginPage/> : location.pathname === '/register' ? <RegisterPage/> : null);
};

export default AuthRootComponent;