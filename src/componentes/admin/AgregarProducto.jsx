import React, {useState} from "react"
import axios from "../../utils/axios"
import { toBase64 } from "../../utils/base64"
import { MessageFailed, MessageSucess } from "../../utils/message"


const AgregarProducto = () => {
    const [producto, setProducto] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        disponible: true,
        descripcion: '',
        urlImage: null
    });

    const [categoria, setCategoria] = useState([]);

    const getCategoria = async () => {
        const { data } = await axios.get('/category');
        setCategoria(data);
    };

    React.useEffect(() => {
        getCategoria();
    }, [])

    //guarda los cambios en cada una de las propiedades de la categoria
    const handleChange = (e) =>{
        setProducto({
            ...producto, //copia de la categoria actual
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = async (e) =>{
        const base64= await toBase64(e.target.files[0])
        const img = base64.split(",")
        setProducto({
            ...producto, 
            urlImage: img[1]
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //guardar categoria
        GuardarProducto();
    };

    const GuardarProducto = async () => {
        try{
            const {data } =await axios.post('/product', producto)
            if(data.nombre){
                MessageSucess({
                    message:"El producto a sido guardardo id: " + data._id,
                    title:"Producto guardado"
                })
            }
        }catch(e){
            MessageFailed({
                message:"El producto no se pudo guardar verique la informacion",
                title:"error"
            })
        }
    };

    return(
        <div className="container-fluid">

            <h2 className="text-center">Formularios Productos</h2>
        
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
                >Guardar Producto</button>
            </form>
        </div>
        
    )

}

export default AgregarProducto;
