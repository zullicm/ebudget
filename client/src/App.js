import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ReactLogo from './Pages/ReactLogo';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/react' element={<ReactLogo />} logo={logo} />
      </Routes>
    </div>
  );
}

export default App;
