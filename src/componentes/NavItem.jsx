import React from 'react'

export const NavItem = (props) => {
    const {categoria, funcion} = props;
    const {nombre} = categoria;
    
    return (
        
        <li className="nav-item"><button className="nav-link active" onClick={funcion} >{nombre}</button></li>
        
    );
}
