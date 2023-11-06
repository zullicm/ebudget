import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ReactLogo from './Pages/ReactLogo';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/react' element={<ReactLogo />} logo={logo} />
      </Routes>
    </div>
  );
}

export default App;
