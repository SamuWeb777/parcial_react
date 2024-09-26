import { Link } from 'react-router-dom';
import ClimaDetalle from '../components/ClimaDetalle';
import Historial from '../components/Historial';
import useClima from '../hooks/useClima';
import useHistorial from '../hooks/useHistorial';

const Clima = () => {
  const { limpiarHistorial } = useHistorial() 
  const clima = useClima();

  return (
    <div>
      <h1>Clima de: {clima?.nombre}</h1>
      {/* Componente que mostrará los detalles del clima */}
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      <Historial/>
      <button><Link to='/'>Volver Atras</Link></button>
      <button onClick={limpiarHistorial}>Limpiar Historial</button>
      {/* Aquí va el historial de consultas */}
    </div>
  );
};

export default Clima;
