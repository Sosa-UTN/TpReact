import { Outlet } from 'react-router-dom';
import  Navbar  from '../components/Navbar';
import  Footer  from '../components/Footer';

export default function Layout() {
  return (
    <div>
      {/* Tu barra de navegación fija */}
      <Navbar />

      {/* Aquí es donde ocurre la magia */}
      <main>
        <Outlet /> {/* React reemplazará esto con Index, Catalogo, etc., dependiendo de la URL */}
      </main>

      {/* Tu pie de página fijo */}
      <Footer />
    </div>
  );
}