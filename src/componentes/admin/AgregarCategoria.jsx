import React, {useState} from "react"
import axios from "../../utils/axios"



const AgregarCategoria = () => {
    const [categoria, setCategoria] = useState({
        nombre: '',
        descripcion: '',
        urlImage: null
    });

    //guarda los cambios en cada una de las propiedades de la categoria
    const handleChange = (e) =>{
        setCategoria({
            ...categoria, //copia de la categoria actual
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = (e) =>{
        setCategoria({
            ...categoria, //copia de la categoria actual
            urlImage: e.target.files[0]
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //guardar categoria
        GuardarCategoria();
    };

    const GuardarCategoria = () => {
        axios.post('/category', categoria)
        .then(res=>{
            console.log(res);
            alert(res.data.message);
        });
    };

    return(
        
        <form
        onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Ingresar categoria"
                    defaultValue={categoria.nombre}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="descripcion">Descripción</label>
                <input 
                    type="text"
                    className="form-control"
                    name="descripcion"
                    placeholder="Ingresar descripción"
                    defaultValue={categoria.descripcion}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="urlImage">Imagen</label>
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
            className="btn btn-outline-primary"
            >Guardar Categoria</button>
        </form>
        
    )
}
export default AgregarCategoria;