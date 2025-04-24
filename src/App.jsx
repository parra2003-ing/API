import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Masculino from './pages/Masculino/Masculino';
import Femenino from './pages/Femenino/Femenino';
import DetallePersonaje from './pages/DetallePersonaje/DetallePersonaje';
import AcercaDe from './pages/AcercaDe/AcercaDe';
import NavBar from './components/Navbar/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masculino" element={<Masculino />} />
        <Route path="/femenino" element={<Femenino />} />
        <Route path="/personaje/:id" element={<DetallePersonaje />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
    </div>
  );
}