import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "../../utils/axios"
import { toBase64 } from "../../utils/base64"
import { MessageFailed, MessageSucess } from "../../utils/message"

const EditarProducto = (props) => {
    const _id = useParams().id;

    const [producto, setProducto] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        disponible: true,
        descripcion: '',
        urlImage: null
    });

    const [categoria, setCategoria] = useState([]);

    const getProduct = async () => {
        const { data } = await axios.get('/category');
        setCategoria(data);
    };

    useEffect(() => {
        getProduct();
    }, [])


    //guarda los cambios en cada una de las propiedades de la producto
    const handleChange = (e) =>{
        setProducto({
            ...producto, //copia de la producto actual
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = async (e) =>{
        const base64 = await toBase64(e.target.files[0])
        const img = base64.split(",")
        setProducto({
            ...producto, 
            urlImage: img[1]
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        GuardarProducto();
    };

    const GuardarProducto = async () => {
        try{
            const { data } = await axios.put(`/product/${producto._id}`, producto)
            if(data.nombre){
                MessageSucess({
                    message:"la producto a sido actualizada id: " + data._id,
                    title:"producto guardado"
                })
            }
        }catch(e){
            MessageFailed({
                message:"la producto no se pudo actualizar verique la informacion",
                title:"error"
            })
        }
    };

    useEffect(() => {
        const getProduct =  async () => {
            try{
                const { data } = await axios.get(`/product/${_id}`);
                setProducto(data);
            }catch(e){
                MessageFailed({
                    message:"la producto no se pudo editar verique la informacion",
                    title:"error"
                })
            }
        };
        getProduct();
    }, [_id] );

    return (
        <div className="container-fluid">

        <h2 className="text-center">Formularios Categorias</h2>
        
        <form className="row"
            onSubmit={handleSubmit}
            >
                <div className="form-group col-md-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        className="form-control my-2"
                        name="nombre"
                        placeholder="Ingresar Producto"
                        defaultValue={producto.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="categoria">Categorias</label>
                    
                    <select 
                        name="categoria"
                        className="form-select my-2" 
                        aria-label="Default select example"
                        defaultValue={producto.categoria}
                        onChange={handleChange}
                    >
                        <option selected>Selecciona una categoria</option>
                        {categoria.map(cat=> (

                        <option value={cat._id}>{cat.nombre}</option>
                        ))}
                    
                    </select>
                    
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="precio">Precio</label>
                    <input 
                        type="text"
                        className="form-control my-2"
                        name="precio"
                        placeholder="Ingresar Precio"
                        defaultValue={producto.precio}
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
                        placeholder="Ingresar descripcion"
                        defaultValue={producto.descripcion}
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
                >Actualizar Producto</button>
            </form>
        </div>  
    )
}

export default EditarProducto;