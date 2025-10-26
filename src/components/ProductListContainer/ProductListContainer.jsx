import { useState, useEffect } from "react"
import ProductList from "../ProductList/ProductList.jsx"
import "./ProductListContainer.css"
import getProducts from "../../data/products.js"
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const ProductListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();


  useEffect(() => {

    setLoading(true);

    getProducts()
      .then((data) => {
        if (categoria) {
          const productsFiltered = data.filter(product => product.categoria === categoria);
          setProducts(productsFiltered);
        } else {
            setProducts(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, [categoria]);

  return (
    <div className="container">
        <h2>{greeting}</h2>
        {loading ? (
          <div className="loader">
            <PulseLoader color="#3B3486"/>
          </div>
        ) : (
          <ProductList products={products} />
        )}
    </div>
  )
}

export default ProductListContainer