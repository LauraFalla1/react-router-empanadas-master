import React, { useEffect, useState } from "react"
import axios from "../../utils/axios"
import {MessageFailed, MessageSucess} from "../../utils/message"



const Categoria = () => {

    //categoria:state
    //setCategoria para actualizar clientes
    const [categoria, setCategoria] = useState([]);

    const getCategoria = async () => {
        const { data } = await axios.get('/category');
        setCategoria(data);
    };

    useEffect(() => {
        getCategoria();
    }, [])

    const deleteCategoria = async (id) => {
        try {
            const { data } = await axios.delete(`/category/${id}`);
            if(data.category){
                MessageSucess({
                    title:"Categoria Eliminada",
                    message: data.msg
                })
                getCategoria()
            }
        } catch (error) {
            MessageFailed({
                title:"Error",
                message: error.response.msg
            })
        }
    }

    return (
        <div>
            <h1>Categories</h1>
            <table className="table table-bordered ">
                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoria.map((cat, index) => (
                            <tr>
                                <th scope="row">{index}</th>
                                <td><img src={cat.urlImage} alt="" /></td>
                                <td>{cat.nombre}</td>
                                <td>{cat.descripcion}</td>
                                <td>
                                <button type="button" class="btn btn-success" onClick={()=>{}}>Editar</button>
                                <button type="button" class="btn btn-danger" onClick={()=>{
                                    deleteCategoria(cat._id)
                                }}>Eliminar</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Categoria