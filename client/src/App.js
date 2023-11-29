import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ReactLogo from './Pages/ReactLogo';
import NavBar from './Component/NavBar';
import BudgetFormPage from './Pages/BudgetFormPage';
import LoginPage from './Pages/LoginPage';

function App() {
  

  useEffect(() =>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setUser(user))
      }
    })
  },[])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/react' element={<ReactLogo />} logo={logo} />
        <Route exact path='/formpage' element={<BudgetFormPage/>} />
        <Route exact path='/login' element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
