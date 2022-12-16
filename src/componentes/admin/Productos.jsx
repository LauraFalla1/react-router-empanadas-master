import React, { useEffect, useState } from "react"
import axios from "../../utils/axios"
import { MessageFailed, MessageSucess } from "../../utils/message"
import './../../styles/productos.css' 
import { Link } from 'react-router-dom';


const Product = (props) => {
  //categoria:state
  //setCategoria para actualizar clientes
  const [producto, setProducto] = useState([]);

  const getProducto = async () => {
    const { data } = await axios.get('/product');
    setProducto(data);
    console.log(data);
  };

  useEffect(() => {
    getProducto();
  }, [])


  const deleteProducto = async (id) => {
    try {
      const { data } = await axios.delete(`/product/${id}`);
      if (data.product) {
        MessageSucess({
          title: "Producto Eliminada",
          message: data.msg
        })
        getProducto()
      }
    } catch (error) {
      MessageFailed({
        title: "Error",
        message: error.response.msg
      })
    }
  }
  return (
    <div className="container-products">
      <h1 className="text-center">Productos</h1>
      <table className="table table-bordered ">
        <thead className="table">
          <tr className="table-main">
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th>
              <Link to="/admin/dashboard/product/agregarproducto/"
              className="btn btn-info mr-1 btn-new"
              role="button"
              aria-pressed ="true"
              >Nuevo Producto</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            producto.map((pro, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img src={pro.urlImage} alt={Image}  width={200} /></td>
                <td>{pro.nombre}</td>
                <td>{pro?.categoria?.nombre}</td>
                <td>{pro.precio}</td>
                <td>{pro.descripcion}</td>
                <td>                                        
                    <Link to={`/admin/dashboard/product/editarproducto/${pro._id}`}
                    className="btn btn-success"
                    role="button"
                    aria-pressed ="true"
                    >Editar</Link> 
                    
                    <button type="button" className="btn btn-danger my-3" onClick={() => {
                        deleteProducto(pro._id)
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


export default Product