
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos";
import Nosotros from "./componentes/Nosotros";
import Contacto from "./componentes/Contacto";
import Error404 from "./componentes/Error404";
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

function App() {
  return (
    <BrowserRouter>

      < Navbar />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
