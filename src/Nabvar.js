import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/vehiculos">Vehículos</Link>
      {/* Agregar otros enlaces según tus categorías */}
    </nav>
  );
}

export default Navbar;
