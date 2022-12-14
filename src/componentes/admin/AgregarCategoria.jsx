import React, {useState} from "react"
import axios from "../../utils/axios"
import { useState } from "react"

const AgregarCategoria = () => {
    const [categoria, setCategoria] = useState({
        nombre: '',
        descripcion: '',
        urlImage: ''
    });

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     //guardar categoria
    // };

    return(
        <form
        // onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmFor="nombre">Nombre</label>
                <input 
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Ingresar categoria"
                    value={cat.nombre}
                    required
                />
            </div>

            <div className="form-group">
                <label htmFor="descripcion">Descripción</label>
                <input 
                    type="text"
                    className="form-control"
                    name="descripción"
                    placeholder="Ingresar descripción"
                    value={cat.descripcion}
                />
            </div>

            <div className="form-group">
                <label htmFor="urlImage">Imagen</label>
                <input 
                    type="file"
                    className="form-control"
                    name="urlImage"
                    onChange={handleImage}
                    required
                />
            </div>

            <button 
            type="submit" 
            class="btn btn-outline-primary"
            >Guardar Categoria</button>
        </form>
    )
}

export default AgregarCategoria;