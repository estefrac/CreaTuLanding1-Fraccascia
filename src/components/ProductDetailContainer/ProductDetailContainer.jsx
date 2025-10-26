import { useState, useEffect} from "react";
import getProducts from "../../data/products.js";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";



const ProductDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProducts()
        .then((data) => {
            const dataProduct = data.find((product) => product.id === parseInt(id));
            setProduct(dataProduct);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);

  return (
    <div>
        {loading ? (
          <div className="loader">
            <PulseLoader color="#3B3486"/>
          </div>
        ) : (
          <ProductDetail product={product}/>
        )}
    </div>
  )
}

export default ProductDetailContainer