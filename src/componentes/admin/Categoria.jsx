import React, { useEffect, useState } from "react"
import axios from "../../utils/axios"
import { MessageFailed, MessageSucess } from "../../utils/message"
import { Link } from 'react-router-dom';

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
            if (data.category) {
                MessageSucess({
                    title: "Categoria Eliminada",
                    message: data.msg
                })
                getCategoria()
            }
        } catch (error) {
            MessageFailed({
                title: "Error",
                message: error.response.msg
            })
        }
    }

    return (
        <div>
            <h1 className="text-center">Categorias</h1>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th  scope="col">#</th>
                        <th  scope="col">Categoria</th>
                        <th  scope="col">Nombre</th>
                        <th  scope="col">Descripción</th>
                        <th>
                            <Link to="/admin/dashboard/categories/agregarcategoria"
                            className="btn btn-info mr-1"
                            role="button"
                            aria-pressed ="true"
                            >Nueva Categoria</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoria.map((cat, index) => (
                            <tr>
                                <th scope="row">{index +1}</th>
                                <td><img src={cat.urlImage}  width={200} alt={Image} /></td>
                                <td>{cat.nombre}</td>
                                <td>{cat.descripcion}</td>
                                <td>                                        
                                       <Link to={`/admin/dashboard/categories/editarcategoria/${cat._id}`}
                                       className="btn btn-success"
                                       role="button"
                                       aria-pressed ="true"
                                       >Editar</Link> 
                                    
                                    <button type="button" className="btn btn-danger my-3" onClick={() => {
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


export default Categoria;