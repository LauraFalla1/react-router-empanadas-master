import mpastel1 from "../img/mpaste1.jpg";
import mpastel2 from "../img/mpastel2.jpg";
import mpastel3 from "../img/mpastel3.jpg";
import mpastel4 from "../img/mpastel4.jpg";
import ppastel from "../img/ppastel.jpg";
import mempa1 from "../img/mempa1.jpeg";
import mempa2 from "../img/mempa2.jpeg";
import mempa3 from "../img/mempa3.jpeg";
import mempa4 from "../img/mempa4.jpeg";
import mempa5 from "../img/mempa5.jpeg";
import mempa6 from "../img/mempa6.jpeg";
import congelado1 from "../img/congelado1.jpeg";
import congelado2 from "../img/congelado2.jpeg";
import congelado3 from "../img/congelado3.jpeg";
import congelado4 from "../img/congelado4.jpeg";
import congelado5 from "../img/congelado5.jpeg";
import congelado6 from "../img/congelado6.jpeg";

import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { NavItem } from "./NavItem";
import { NavItemContent } from "./NavItemContent";

const Productos = (props) => {
  const [productos, setProductos] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [activeMenu, setActiveMenu] = useState("0");

  const getProductos = async() => {
    const { data } = await axios.get("/product/productByCategories");
    setProductos(data);
  };

  const getCategorias = async () => {
    const { data } = await axios.get("/category");
    setCategorias(data);
  };

  useEffect(() => {
    getCategorias()
    getProductos()
  }, []);
  
  return (
    <div>
      <div className="page-header mb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Productos</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <div className="section-header text-center">
            <h2>Menú</h2>
          </div>
          <div className="menu-tab">
            <ul className="nav nav-pills justify-content-center">
              {categorias.map((cat, idx) => (
                <NavItem categoria={cat} funcion={() => setActiveMenu(idx.toString())}/>
              ))}
            </ul>
            <div className="tab-content">
              <div className="container tab-pane active">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    { 
                      (Object.keys(productos).length === 0) 
                      ? <h1>No hay información</h1> 
                      : productos[activeMenu].map((pro) =>
                        <NavItemContent producto={pro} />
                      )
                    }
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <img src={mempa3} alt={Image} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
