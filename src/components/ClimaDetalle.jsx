import React from 'react';

const ClimaDetalle = ({ clima }) => {
  return (
    <table className="tabla-clima">
      <thead>
        <tr>
          <th>Temperatura</th>
          <th>Humedad</th>
          <th>Condición</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{clima.temperatura} °C</td>
          <td>{clima.humedad} %</td>
          <td>{clima.condicion}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ClimaDetalle;
