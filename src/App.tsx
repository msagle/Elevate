import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import MissionPage from './pages/MissionPage/MissionPage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/mission" element={<MissionPage />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
