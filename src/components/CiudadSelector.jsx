import useCargarCiudades from '../hooks/useCargarCiudades';

const CiudadSelector = ({ onSeleccionarCiudad }) => {
  const ciudades = useCargarCiudades()
  
  const handleChange = (event) => {
    const idCiudad = event.target.value
    onSeleccionarCiudad(ciudades.find(c => c.id === parseInt(idCiudad)));// Lógica para manejar la acción de selección de ciudad
  }

  return (
    
    <select onChange={handleChange}>
      <option value=''>Selecciona una ciudad</option>
      { ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.nombre}
        </option>
      ))}
    </select>
    
  )
}

export default CiudadSelector;
