import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AuthRootComponent from "./components/auth-page/index.jsx";

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
            <Route path='login' element={<AuthRootComponent />}/>
            <Route path='register' element={<AuthRootComponent />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
