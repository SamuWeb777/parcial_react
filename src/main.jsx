import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Clima from './pages/Clima.jsx'
import { HistorialProvider } from './context/HistorialContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistorialProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/clima' element={<Clima/>}/>
      <Route path="*"/>
    </Routes>
    </BrowserRouter>
    </HistorialProvider>
  </StrictMode>,
)
