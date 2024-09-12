import { useState } from 'react';
import ClimaDetalle from '../components/ClimaDetalle';

const Clima = () => {
  const [clima, setClima] = useState(null);

  return (
    <div>
      <h1>Clima de la Ciudad</h1>
      {/* Componente que mostrará los detalles del clima */}
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      {/* Aquí va el historial de consultas */}
    </div>
  );
};

export default Clima;
