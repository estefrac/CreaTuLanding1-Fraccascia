import { useState } from "react";
import { Package } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductCount from "../ProductCount/ProductCount.jsx";
import { CartContext } from "../../context/CartContext.jsx";

import "./ProductDetail.css";


const ProductDetail = ({product}) => {

  const{ addProduct } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = (count) => {
    const newProduct = {...product, quantity: count};
    addProduct(newProduct)
  }

  const buyNow = (count) => {
    const newProduct = {...product, quantity: count};
    addProduct(newProduct);
    navigate("/checkout");
  }

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

                <div className="product-price">{product.precio}</div>
                <ProductCount stock={product.stock} addToCart={addToCart} buyNow={buyNow}/>
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