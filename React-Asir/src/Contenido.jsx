import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegacion from './Nav';
import Aside from './Aside';
import Tarjetas from './Cards'; // Asegúrate de que este componente esté creado
import Galeria from './Galeria'; // Componente para la galería
import './contenido.module.css'

function Contenido() {
  return (
    <Router>
      <Navegacion />
      <main>
        <Aside />
        <section>
          <Routes>
            <Route exact path="/" element={<Tarjetas />} />
            <Route path="/galeria" element={<Galeria />} />
            {/* Otras rutas según sea necesario */}
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default Contenido;