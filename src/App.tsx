import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage'
import CreditComp from './pages/Credit'
import AppBarComp from "./components/AppBar"
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div >
      <AppBarComp/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/credit" element={<CreditComp />} />
      </Routes>
    </div>
  );
}

export default App;
