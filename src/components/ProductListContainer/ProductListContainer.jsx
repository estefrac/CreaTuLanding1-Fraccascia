import { useState, useEffect } from "react"
import getProducts from "../../data/products.js"
import "./ProductListContainer.css"
import ProductList from "../ProductList/ProductList.jsx"

const ProductListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container">
        <h2>{greeting}</h2>
        <ProductList products={products} />
    </div>
  )
}

export default ProductListContainer