import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { doc, getDoc } from "firebase/firestore";

import ProductDetail from "../ProductDetail/ProductDetail";
import db from "../../db/db.js";
import "./ProductDetailContainer.css";



const ProductDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
      const getProduct = async()=>{
        try {
          const productRef = doc(db, "products", id);
          const dataDb = await getDoc(productRef);
          
          if (dataDb.exists()) {
            const data = {id: dataDb.id, ...dataDb.data()};
            setProduct(data);
          } else {
            setError(true);
          }
        } catch (error) {
          console.log(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      
      getProduct();
    }, [id]);

  return (
    <div>
        {loading ? (
          <div className="loader">
            <PulseLoader color="#3B3486"/>
          </div>
        ) : error ? (
          <div className="product-not-found">
            <div className="not-found-icon">⚠️</div>
            <h2 className="not-found-title">Producto no encontrado</h2>
            <p className="not-found-text">Lo sentimos, el producto que buscas no está disponible</p>
            <Link to="/" className="not-found-btn">Volver al catálogo</Link>
          </div>
        ) : (
          <ProductDetail product={product}/>
        )}
    </div>
  )
}

export default ProductDetailContainer