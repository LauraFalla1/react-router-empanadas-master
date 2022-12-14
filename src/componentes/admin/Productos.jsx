import React, { useEffect, useState } from "react"
import axios from "../../utils/axios"
import { MessageFailed, MessageSucess } from "../../utils/message"

const Product = () => {
  //categoria:state
  //setCategoria para actualizar clientes
  const [producto, setProducto] = useState([]);

  const getProducto = async () => {
    const { data } = await axios.get('/product');
    setProducto(data);
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
    <div>
      <h1>Productos</h1>
      <table className="table table-bordered ">
        <thead >
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {
            producto.map((pro, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img src={pro.urlImage} alt={Image} /></td>
                <td>{pro.nombre}</td>
                <td>{pro.categoria}</td>
                <td>{pro.precio}</td>
                <td>{pro.descripcion}</td>
                <td>
                  <button type="button" className="btn btn-success" onClick={() => { }}>Editar</button>
                  <button type="button" className="btn btn-danger" onClick={() => {
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