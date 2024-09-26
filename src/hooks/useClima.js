import { useEffect, useState } from 'react'
import useCargarCiudades from './useCargarCiudades'
import { useParams } from 'react-router-dom'

const useClima = () => {
    const  [clima, setClima] = useState()
    const {id} =  useParams()
    const ciudades = useCargarCiudades()

    useEffect(() => {
      setClima(ciudades.find(ciudad => ciudad.id === parseInt(id)))
    }, [ciudades, id])
    
  return clima
}

export default useClima