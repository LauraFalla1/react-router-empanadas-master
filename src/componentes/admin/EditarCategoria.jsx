import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "../../utils/axios"
import { toBase64 } from "../../utils/base64"
import { MessageFailed, MessageSucess } from "../../utils/message"

const EditarCategoria = (props) => {
    const _id = useParams().id;

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
        const base64 = await toBase64(e.target.files[0])
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
            const { data } = await axios.put(`/category/${categoria._id}`, categoria)
            if(data.nombre){
                MessageSucess({
                    message:"la categoria a sido actualizada id: " + data._id,
                    title:"Categoria actializada"
                })
            }
        }catch(e){
            MessageFailed({
                message:"La categoria no se pudo actualizar verique la informacion",
                title:"error"
            })
        }
    };

    useEffect(() => {
        const getCategoria =  async () => {
            try{
                const { data } = await axios.get(`/category/${_id}`);
                setCategoria(data);
            }catch(e){
                MessageFailed({
                    message:"La categoria no se pudo editar verique la informacion",
                    title:"error"
                })
            }
        };
        getCategoria();
    }, [_id] );

    return(
        <div className="container-fluid">

        <h2 className="text-center">Formularios Categorias</h2>
        
        <form
        className="row"
        onSubmit={handleSubmit}
        >
            <div className="form-group col-md-6">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    className="form-control my-2"
                    name="nombre"
                    placeholder="Ingresar categoria"
                    defaultValue={categoria.nombre}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group col-md-6">
                <label htmlFor="descripcion">Descripción</label>
                <input 
                    type="text"
                    className="form-control my-2"
                    name="descripcion"
                    placeholder="Ingresar descripción"
                    defaultValue={categoria.descripcion}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group col-md-6">
                <label htmlFor="urlImage">Imagen</label>
                <input 
                    type="file"
                    className="form-control my-2"
                    name="urlImage"
                    onChange={handleImage}
                    required
                />
            </div>

            <button 
            type="submit" 
            className="btn btn-outline-primary"
            >Actualizar Categoria</button>
        </form>
        </div>  
    )
}

export default EditarCategoria;