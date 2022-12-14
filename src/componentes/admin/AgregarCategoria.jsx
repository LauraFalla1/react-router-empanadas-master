import React, {useState} from "react"
import axios from "../../utils/axios"
import { toBase64 } from "../../utils/base64"
import { MessageFailed, MessageSucess } from "../../utils/message"


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

    const handleImage = async (e) =>{
        const base64= await toBase64(e.target.files[0])
        const img = base64.split(",")
        setCategoria({
            ...categoria, 
            urlImage: img[1]
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //guardar categoria
        GuardarCategoria();
    };

    const GuardarCategoria = async () => {
        try{
            const {data } =await axios.post('/category', categoria)
            if(data.nombre){
                MessageSucess({
                    message:"la categoria a sido guardarda id: " + data._id,
                    title:"categoria guardada"
                })
            }
        }catch(e){
            MessageFailed({
                message:"la categoria no se pudo guardar verique la informacion",
                title:"error"
            })
        }
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
