import { useContext } from 'react';
import HistorialContext from '../context/HistorialContext';

const useHistorial = () => {
  const { historial, setHistorial } = useContext(HistorialContext);

  const agregarConsulta = (consulta) => {
    // Lógica para agregar una consulta al historial
    const nuevaConsulta = {
      id: consulta.id,
      ciudad: consulta.ciudad,
      fecha: new Date().toLocaleString(),
    };
    const nuevoHistorial = [...historial, nuevaConsulta];
    setHistorial(nuevoHistorial);
    localStorage.setItem('historialConsultas', JSON.stringify(nuevoHistorial));
  };

  const limpiarHistorial = () => {
    // Lógica para limpiar el historial
    setHistorial([]);
    localStorage.removeItem('historialConsultas');
  };

  return { historial, agregarConsulta, limpiarHistorial };
};

export default useHistorial;
