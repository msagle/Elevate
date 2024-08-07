import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CampsPage from './pages/CampsPage/CampsPage';
import HomePage from './pages/HomePage/HomePage';
import MissionPage from './pages/AboutUsPage/MissionPage/MissionPage';
import ReportsDisclosuresPage from './pages/AboutUsPage/ReportsDisclosuresPage/ReportsDiscolsuresPage';
//import TeamPage from './pages/TeamPage/TeamPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ArticleGenerator from './pages/ArticlesPage/ArticleGenerator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/mission" element={<MissionPage />}/>
          <Route path="/reports" element={<ReportsDisclosuresPage />}/>
          <Route path="/camps" element={<CampsPage />}/>
          <Route path="/articles" element={<ArticlesPage />}/>
          <Route path="/articles/:articleId" element={<ArticleGenerator />}/>
          <Route path="/contact" element={<ContactUsPage />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
