import { useState } from "react";
import { ShoppingCart, Minus, Plus, Package } from "lucide-react";
import "./ProductDetail.css";


const ProductDetail = ({product}) => {

    const defaultImg = "/img/card-default.png";
    const [imgSrc, setImgSrc] = useState(product.imagen || defaultImg);
    const handleError = () => {
        setImgSrc(defaultImg);
    };

  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="product-card">
          <div className="product-grid">
            <div className="product-image-container">
              <img src={imgSrc} alt={product.nombre} onError={handleError} className="product-image"/>
            </div>

            <div className="product-info">
              <div>
                <h1 className="product-title">
                  {product.nombre}
                </h1>

                <p className="product-short-description">
                  {product.descripcion}
                </p>

                <div className="product-stock">
                  <Package className="stock-icon" />
                  <span>
                    Stock disponible:{" "}
                    <span className="stock-amount">{product?.stock ? `${product.stock} unidades` : "No disponible"}</span>
                  </span>
                </div>

                <div className="product-price">{product.price}</div>

                <div className="quantity-section">
                  <label className="quantity-label">
                    Cantidad
                  </label>
                  <div className="quantity-controls">
                    <button className="quantity-button">
                      <Minus />
                    </button>
                    <span className="quantity-display">
                      1
                    </span>
                    <button className="quantity-button">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button className="product-detail-btn product-detail-btn-primary">
                  Comprar ahora
                </button>
                <button className="product-detail-btn product-detail-btn-secondary">
                  <ShoppingCart className="product-detail-btn-icon" />
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="description-card">
          <h2 className="description-title">
            Descripción del Producto
          </h2>
          <div className="description-content">
            <p>{product.descripcion_larga}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;