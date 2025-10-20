import "./ProductList.css"

const ProductList = ({ products }) => {
  return (
    <div className="container-products">
        {
          products.map((product)=>(
            <div key={product.id} className="card">
              <div className="tilt">
                <div className="img">
                  <img src={product.imagen} alt={product.nombre} />
                </div>
              </div>
              <div className="info">
                <div className="cat">{product.categoria}</div>
                <h2 className="title">{product.nombre}</h2>
                <p className="desc">{product.descripcion}</p>
                <div className="feats">
                  <span className="feat">Resistente al agua</span>
                  <span className="feat">Alta calidad</span>
                  <span className="feat">Diseño exclusivo</span>
                </div>
                <div className="bottom">
                  <div className="price">
                    <span className="new">${product.precio}</span>
                  </div>
                  <button className="btn">
                    <span>Agregar</span>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                  </button>
                </div>
                <div className="meta">
                  <div className="rating">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span className="rcount">Excelente calidad</span>
                  </div>
                  <div className="stock">Disponible</div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default ProductList