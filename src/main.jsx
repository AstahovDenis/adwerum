import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/common.css'
import './styles/nav-style.css'
import './styles/wrapper-style.css'
import Nav from "./components/Header/Nav.jsx"
import Wrapper from "./components/Wrapper.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Wrapper>
            <Nav />
        </Wrapper>
  </StrictMode>,
)
