import React from 'react'
import mempa3 from "../img/mempa3.jpeg";

export const NavItemContent = (props) => {
    const {producto} = props;
    const {nombre, precio, descripcion, urlImage} = producto;

    return (
        <div className="container tab-pane active">
          <div className="row">
            <div className="col-lg-7 col-md-12">
                <div className="menu-item">
                  <div className="menu-img">
                    <img src={urlImage} alt={Image} />
                  </div>
                  <div className="menu-text">
                    <h3>
                      <span>{nombre}</span>
                      <strong>${precio}</strong>
                    </h3>
                    <p>{descripcion}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )
}
