import React from 'react';
import './reset.scss';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import ContactMe from './pages/contactMe/ContactMe';
import ProyectosPage from './pages/proyectosPage/proyectosPage';
import AboutPage from './pages/aboutPage/AboutPage';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/proyectos" element={<ProyectosPage />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>

  </div>
);

export default App;
