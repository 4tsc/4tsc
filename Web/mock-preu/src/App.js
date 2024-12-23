import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/home.js';

const App = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </>
  );
};

export default App;
