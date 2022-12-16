import { NavLink } from "react-router-dom";
import pastel1 from "../img/pastel1.jpg";
import pastel2 from "../img/pastel2.png";
import carrusel2 from "../img/empanada3.jpg";
import empanada1 from "../img/empanada1.jpg";
import empanada2 from "../img/empanada2.jpg";
import empanada3 from "../img/empanada3.jpg";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
function Menu() {
  const [producto, setProducto] = useState([]);

  const getProducto = async () => {
    const { data } = await axios.get("/product");
    setProducto(data);
    console.log(data);
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div className="menu">
      <div className="container">
        <div className="section-header text-center">
          <h2>Menú</h2>
        </div>
        <div className="menu-tab">
          <div className="tab-content">
            <div id="burgers" className="container tab-pane active">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  {producto.map((pro, idx) => {
                    if(idx < 5) {
                      return <div className="menu-item">
                      <div className="menu-img">
                        <img src={pro.urlImage} alt={Image} />
                      </div>
                      <div className="menu-text">
                        <h3>
                          <span>{pro.nombre}</span>{" "}
                          <strong>$ {pro.precio}</strong>
                        </h3>
                        <p>
                          {pro.descripcion}
                        </p>
                      </div>
                    </div>
                    }
                  } 
                )}
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <img src={carrusel2} alt={Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills justify-content-center">
          <NavLink className="btn custom-btn" to="/Productos">
            Productos
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
