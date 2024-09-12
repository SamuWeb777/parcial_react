import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCargarCiudades from '../hooks/useCargarCiudades';

const CiudadSelector = ({ onSeleccionarCiudad }) => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    // Aquí deben cargar las ciudades desde el archivo data.json
  fetch('./datos.json')
  .then(response => response.json())
  .then(data => setCiudades(data.ciudades))
  .catch(error => console.error('Error al cargar las ciudades:', error));
  }, []);
  
  const handleChange = (event) => {
    event.preventDefault();
    const idCiudad = event.target.value;
    onSeleccionarCiudad(idCiudad);// Lógica para manejar la acción de selección de ciudad
  };

  return (
    <>
    <select onChange={handleChange}>
      <option value="">Selecciona una ciudad</option>
      { ciudades.map((ciudad, index) => (
        <option key={ciudad.id} value={ciudad.nombre}>
          {ciudad.nombre}
        </option>
      ))}
    </select>
    <button type="submit">Consultar Clima</button>
    </>
  );
};

export default CiudadSelector;
