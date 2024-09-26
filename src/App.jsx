import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clima from "./pages/Clima";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/clima/:id' element={<Clima/>}/>
      <Route path="*" element={<h1>404 - Page not found</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
