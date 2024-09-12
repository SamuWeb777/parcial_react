import React, { createContext, useState } from 'react';

const HistorialContext = createContext();

export const HistorialProvider = ({ children }) => {
  const [historial, setHistorial] = useState(JSON.parse(localStorage.getItem('historialConsultas')) || []);

  return (
    <HistorialContext.Provider value={{ historial, setHistorial }}>
      {children}
    </HistorialContext.Provider>
  );
};

export default HistorialContext;
