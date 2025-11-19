import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css"

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