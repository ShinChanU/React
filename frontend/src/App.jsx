import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/SignUpPage/SignUpPage';

function App() {
  return (
    <>
      <div>
        hi
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={LandingPage} />
          <Route path='/login' element={LoginPage} />
          <Route path='/signup' element={RegisterPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;