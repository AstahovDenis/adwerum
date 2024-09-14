import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './styles/reset.css'
import './styles/common.css'
import './styles/nav-style.css'
import './styles/header-style.css'
import Nav from "./components/nav/Nav.jsx"
import RegisterPage from "./components/auth-page/register/RegisterPage.jsx";
import LoginPage from "./components/auth-page/login/LoginPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Nav />
          <RegisterPage/>
          <LoginPage/>
      </BrowserRouter>
  </StrictMode>,
)
