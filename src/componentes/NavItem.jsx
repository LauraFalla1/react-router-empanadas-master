import React from 'react'

export const NavItem = (props) => {
    const {categoria, funcion} = props;
    const {nombre} = categoria;
    
    return (
        <button className="nav-item" onClick={funcion} >{nombre}</button>
    );
}
