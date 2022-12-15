import { NavLink } from "react-router-dom";
import iconempanada from "../img/icons8-empanada-64.png";
import iconpastel from "../img/icons8-patata-48.png";
import icongenlado from "../img/icons8-bolsa-de-cemento-48.png";
import axios from "../utils/axios";
import { useEffect, useState } from "react";

function Categorias() {
  const [categoria, setCategoria] = useState([]);

  const getCategoria = async () => {
    const { data } = await axios.get("/category");
    setCategoria(data);
  };

  useEffect(() => {
    getCategoria();
  }, []);
  return (
    <div className="food">
      <div className="container">
        <div className="row align-items-center">
          {categoria.map((cat) => (
            <div className="col-md-4">
              <div className="food-item">
                <img  height={200} width={200} src={cat.urlImage} alt={Image} />
                <h2>{cat.nombre}</h2>
                <p>
                 {cat.descripcion}
                </p>
                <NavLink to="/Productos">Ver Menú</NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categorias;
