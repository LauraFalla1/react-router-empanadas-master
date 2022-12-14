import React from "react"
import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses } from 'react-pro-sidebar';
import iconempanada from '../../img/carrusel2.jpg'
import { Link, Route, Routes } from 'react-router-dom';
import Product from "./Productos";
import Categories from "./Categoria";
import ProductIcon from "./icons/product";
import CategoryIcon from "./icons/category";
import AgregarCategoria from "./AgregarCategoria";


const DashboardAdmin = () => {

    const { collapseSidebar } = useProSidebar();

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor:"rgba(0, 0, 0, .04)" }}>
            <Sidebar
             rootStyles={{
                [`.${sidebarClasses.container}`]: {
                  backgroundColor: '#fff',
                },
              }} >
                <Menu menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? 'rgba(251, 175, 50, 0.3)' : '#000',
                                backgroundColor: active ? 'rgba(251, 175, 50, 0.3)' :  '#fff' ,
                            };
                    },
                }}>
                    <img src={iconempanada} alt={"Empanada"} className="w-100"/>
                    <MenuItem icon={<ProductIcon width={20}/>} routerLink={<Link to={"/admin/dashboard/product"} />}> Productos </MenuItem>
                    <MenuItem icon={<CategoryIcon  width={20}/>} routerLink={<Link to={"/admin/dashboard/categories"} />}> Categorias </MenuItem>
                </Menu>
            </Sidebar>
            <main className="w-100" >
                 <button onClick={() => collapseSidebar()}>Collapse</button>
                <Routes>
                    <Route path="/" element={<Product />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/agregarcategoria" element={<AgregarCategoria />} />
                </Routes>
            </main>
        </div>
    )
}


export default DashboardAdmin