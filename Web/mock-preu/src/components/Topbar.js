import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Topbar.css';

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="topbar-container">
        <h1 className="logo">Preuniversitario</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/inscripciones">Inscripciones</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
