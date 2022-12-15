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
function Productos() {
  const [producto, setProducto] = useState({});
  const [categoria, setCategoria] = useState([]);
  const getProducto = async () => {
    const { data } = await axios.get("/product");
    if (data.length > 0) {
      const response = data.reduce(
        (acc, val) => {
          const index = acc.categorias.findIndex(
            (item) => val.categorias._id === item._id
          );
          if (index === -1) {
            acc.categorias.push(val.categoria);
          }
          if (acc.productos[val.categoria._id] === undefined) {
            acc.productos[val.categoria._id] = [];
          }
          acc.productos[val.categoria._id].push( val);
          return acc;
        },
        { categorias: [], productos: {} }
      );

      setProducto(response.productos);
      setCategoria(response.categorias);
    }
  };

  useEffect(() => {
    getProducto();
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
              {categoria.map((cat) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#{cat._id}"
                  >
                    {cat.nombre}
                  </a>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {categoria.map((cat) =>{ 
                debugger;
                return(
                <div id={cat._id} className="container tab-pane active">
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      {producto[cat._id].map((pro) => (
                        <div className="menu-item">
                          <div className="menu-img">
                            <img src={pro.urlImage} alt={Image} />
                          </div>
                          <div className="menu-text">
                            <h3>
                              <span>{pro.nombre}</span>
                              <strong>${pro.precio}</strong>
                            </h3>
                            <p>{pro.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                      <img src={mempa3} alt={Image} />
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
