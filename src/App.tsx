import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CampsPage from './pages/CampsPage/CampsPage';
import HomePage from './pages/HomePage/HomePage';
import MissionPage from './pages/MissionPage/MissionPage';
import TeamPage from './pages/TeamPage/TeamPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/mission" element={<MissionPage />}/>
          <Route path="/team" element={<TeamPage />}/>
          <Route path="/camps" element={<CampsPage />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
