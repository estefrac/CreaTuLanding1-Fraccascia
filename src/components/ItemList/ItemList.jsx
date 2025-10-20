const ItemList = ({ products }) => {
  return (
    <div>
        {
          products.map((product)=>(
            <div key={product.id}>
              <h3>{product.nombre}</h3>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
            </div>
          ))
        }
    </div>
  )
}

export default ItemList