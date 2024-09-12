import { Link, NavLink } from "react-router-dom";
import CiudadSelector from "../components/CiudadSelector";

const Home = () => {
  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (idCiudad) => {
    // Navegar a la página de clima con el ID de la ciudad seleccionada
  };

  return (
    <div>
      <h1>Consulta de Clima</h1>
      {/* Componente que mostrará el selector de ciudades */}
      <CiudadSelector/>
      <br/>
      {/* Aquí va el historial de consultas */}
      <NavLink to="/clima">Ir a la página de clima</NavLink>
    
    <h2>Historial de Consultas</h2>
    <ul id="listaHistorial"></ul>
    
    <button id="verHistorial">Ver Historial de Consultas</button>
    </div>
  );
};

export default Home;
