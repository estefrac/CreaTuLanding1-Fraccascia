import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const defaultImg = "/img/card-default.png";
  const [imgSrc, setImgSrc] = useState(product.imagen || defaultImg);
  const handleError = () => {
    setImgSrc(defaultImg);
  };

  return (
    <div className="card">
      <div className="tilt">
        <div className="img">
          <img src={imgSrc} alt={product.nombre} onError={handleError} /> 
        </div>
      </div>
      <div className="info">
        <div className="cat">{product.categoria}</div>
        <h2 className="title">{product.nombre}</h2>
        <p className="desc">{product.descripcion}</p>
        <div className="bottom">
          <div className="price">
            <span className="new">${product.precio}</span>
          </div>
          <div className="btn-card">
            <Link to={`/detail/${product.id}`} className="btn"><span>Ver más</span></Link>
            <Link className="btn"><span>Comprar</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;