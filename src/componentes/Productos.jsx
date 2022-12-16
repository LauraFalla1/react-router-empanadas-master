import mempa3 from "../img/mempa3.jpeg";

import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { NavItem } from "./NavItem";
import { NavItemContent } from "./NavItemContent";

const Productos = (props) => {
  const [productos, setProductos] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [activeMenu, setActiveMenu] = useState("0");

  const getProductos = async () => {
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
                  <NavItem categoria={cat} funcion={() => setActiveMenu(idx.toString())} />
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
