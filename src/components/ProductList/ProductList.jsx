import "./ProductList.css"
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductList = ({ products }) => {
  return (
    <div className="container-products">
        {
          products.map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))
        }
    </div>
  )
}

export default ProductList