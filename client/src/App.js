import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Component/NavBar';
import LoginPage from './Pages/LoginPage';
import BudgetFormPage from './Pages/BudgetFormPage';
import BudgetPage from './Pages/BudgetPage';
import Reduxtest from './Component/Reduxtest';


function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/formpage' element={<BudgetFormPage/>} />
        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/budgetpage' element={<BudgetPage/>} />
        <Route exact path='/reduxtest' element={<Reduxtest/>}/>
      </Routes>
    </div>
  );
}

export default App;
