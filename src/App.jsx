// archivo principal en el que se conectaran todos los componentes
// import Component from "./pages/Component"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Index from './pages/Index';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* El Layout envuelve a todas las demás rutas */}
        <Route path="/" element={<Layout />}>
          
          {/* Aquí defines qué componente va con qué URL */}
          <Route index element={<Index />} /> {/* index significa que es la ruta principal '/' */}
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="galeria" element={<Galeria />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App