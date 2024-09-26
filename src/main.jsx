import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HistorialProvider } from './context/HistorialContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistorialProvider>
    <App/>
    </HistorialProvider>
  </StrictMode>,
)
