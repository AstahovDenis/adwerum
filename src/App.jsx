import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthRootComponent from "./components/auth-page/index.jsx";
import Nav from "./components/nav/Nav.jsx";
import RegisterPage from "./components/auth-page/register/RegisterPage.jsx";
import LoginPage from "./components/auth-page/login/LoginPage.jsx";

function App() {
  return (
    <>
      <div className='App'>
              <Nav />
              <RegisterPage/>
              <LoginPage/>
          <Routes>
              <Route path='login' element={<AuthRootComponent />}/>
              <Route path='register' element={<AuthRootComponent />}/>
          </Routes>
      </div>
    </>
  )
}

export default App
