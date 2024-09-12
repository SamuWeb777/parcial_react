import { useState, useEffect } from 'react';

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos la carga de un archivo local de JSON con `fetch`
    fetch('/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la carga del JSON');
      }
      return response.json();
    })
    .then(data => {
      setCiudades(data.ciudades);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  return { ciudades, loading, error };  // Retornamos las ciudades cargadas
};

export default useCargarCiudades;
