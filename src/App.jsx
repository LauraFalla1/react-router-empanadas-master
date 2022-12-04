
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos";
import Nosotros from "./componentes/Nosotros";
import Contacto from "./componentes/Contacto";
import Error404 from "./componentes/Error404";
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Login from './componentes/Login';
import { UserContext } from "./context/user.context";
import CloseSection from "./componentes/CloseSection";
import DashboardAdmin from "./componentes/admin/Dashboard";

import {ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';



function App() {
  const { authUser } = React.useContext(UserContext)
  return (
    <ProSidebarProvider>
    <BrowserRouter>
    {!authUser.isAdmin ?(< Navbar />):null}
      

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/login' element={<Login />} />
        <Route path="/close-section" element={<CloseSection/>}/>
        <Route path="/admin/dashboard/*" element={<DashboardAdmin/>}/>
        <Route path='*' element={<Error404 />} />
      </Routes>

      {!authUser.isAdmin ?(<Footer />):null}

    </BrowserRouter>
    </ProSidebarProvider>
  );
}

export default App;
