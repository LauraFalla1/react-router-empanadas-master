import React from 'react'

export const NavItemContent = (props) => {
    const {producto} = props;
    const {nombre, precio, descripcion, urlImage} = producto;

    return (
        
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
      )
}
