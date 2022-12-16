import React from "react"
import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses } from 'react-pro-sidebar';
import { Link, Route, Routes } from 'react-router-dom';
import iconempanada from '../../img/carrusel2.jpg'
import Product from "./Productos";
import Categories from "./Categoria";
import ProductIcon from "./icons/product";
import CategoryIcon from "./icons/category";
import AgregarCategoria from "./AgregarCategoria";
import AgregarProducto from "./AgregarProducto";
import EditarCategoria from "./EditarCategoria";
import EditarProducto from "./EditarProducto";
import { UserContext } from '../../context/user.context'
import { useNavigate } from 'react-router-dom';

const DashboardAdmin = () => {

    let navigate = useNavigate()
    const { collapseSidebar } = useProSidebar();
    const { setAuthUser } = React.useContext(UserContext)

    const cerrarSesion = () => {
        localStorage.clear()
        setAuthUser({
            token: "",
            isAuth: false,
            isAdmin: false
        })
        navigate("/")
    }


    return (
        <div style={{ display: 'flex', height: '100%'}} className="container-desktop">
            <Sidebar 
             rootStyles={{
                [`.${sidebarClasses.container}`]: {
                  backgroundColor: '#fff',
                },
              }} className="dashboard-main">
                <Menu menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? 'rgba(251, 175, 50, 0.3)' : '#000',
                                backgroundColor: active ? 'rgba(251, 175, 50, 0.3)' :  '#fff' ,
                            };
                    },
                }} className="dashboard">
                    <img src={iconempanada} alt={"Empanada"} className="w-100 img-dashboard"/>
                    <MenuItem icon={<ProductIcon width={20}/>} routerLink={<Link to={"/admin/dashboard/product"} />}> Productos </MenuItem>
                    <MenuItem icon={<CategoryIcon  width={20}/>} routerLink={<Link to={"/admin/dashboard/categories"} />}> Categorias </MenuItem>
                    <button class="btn btn-outline-secondary color-btn" onClick={cerrarSesion}>Salir</button>
                </Menu>
            </Sidebar>
            <main className="w-100 main-new" style={{background: '#fff8f0'}}>
                 <button onClick={() => collapseSidebar()} className="Collapse">Collapse</button>
                <Routes>
                    <Route path="/" element={<Product />} />
                    
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/agregarproducto" element={<AgregarProducto />} />
                    <Route path="/product/editarproducto/:id" element={<EditarProducto />} />

                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/agregarcategoria" element={<AgregarCategoria />} />
                    <Route path="/categories/editarcategoria/:id" element={<EditarCategoria />} />
                </Routes>
            </main>
        </div>
    )
}


export default DashboardAdmin