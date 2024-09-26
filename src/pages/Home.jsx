import { Link, NavLink, Route, useNavigate } from "react-router-dom";
import CiudadSelector from "../components/CiudadSelector";
import useHistorial from "../hooks/useHistorial";
import Historial from "../components/Historial";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate()
  const { agregarConsulta } = useHistorial()
  const [mostrarHistorial, setMostrarHistorial] = useState(false)
  const [ciudadSeleccionada, setCiudadSeleccionada]= useState (false)
  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (ciudad) => {
    // Navegar a la página de clima con el ID de la ciudad seleccionada
  setCiudadSeleccionada(ciudad);
  };

  const handleObtenerClima = () =>{
    if (ciudadSeleccionada) {
      agregarConsulta(ciudadSeleccionada); // Agregar la consulta al historial
      navigate(`clima/${ciudadSeleccionada.id}`); // Navegar a la página del clima
    }
  }

  const handleVerHistorial = () => {
    setMostrarHistorial(!mostrarHistorial);
  };
  return (
    <main>
      <h1>Consulta de Clima</h1>
      {/* Componente que mostrará el selector de ciudades */}
      <CiudadSelector onSeleccionarCiudad={handleSeleccionarCiudad}/>
      <br/>
      {/* Botón para obtener el clima */}
      <button 
        onClick={handleObtenerClima} 
        disabled={!ciudadSeleccionada} // Deshabilitar si no hay ciudad seleccionada
      >
        Obtener Clima
      </button>
      {/* Aquí va el historial de consultas */}    
    <h2>Historial de Consultas</h2>
    {mostrarHistorial && <Historial/>}
    <button id="verHistorial" onClick={handleVerHistorial}>{mostrarHistorial ? " Ocultar Historial" : "Ver Historial de Consultas"}</button>
    </main>
  );
};

export default Home;
