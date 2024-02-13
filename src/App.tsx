import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import MissionPage from './pages/MissionPage/MissionPage';
import TeamPage from './pages/TeamPage/TeamPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';


function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/mission" element={<MissionPage />}/>
            <Route path="/team" element={<TeamPage />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </PrimeReactProvider>
    </div>
  );
}

export default App;
