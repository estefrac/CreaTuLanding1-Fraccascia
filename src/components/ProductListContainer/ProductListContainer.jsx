import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { collection, getDocs, query, where } from "firebase/firestore";

import ProductList from "../ProductList/ProductList.jsx"
import db from "../../db/db.js";

import "./ProductListContainer.css"

const ProductListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(()=>{
    setLoading(true);
    
    const productsRef = collection(db, "products");

    const getData = async() => {
      try {
        if(categoria){
          const q = query(productsRef, where("categoria", "==", categoria));
          const dataDb = await getDocs(q);
          const data = dataDb.docs.map((productDb)=>{
            return {id: productDb.id, ...productDb.data()}
          })
          setProducts(data);
        } else {
          const dataDb = await getDocs(productsRef);
          const data = dataDb.docs.map((productDb)=>{
            return {id: productDb.id, ...productDb.data()}
          })
          setProducts(data);
        }
      } catch (error) {
        console.error("Error al obtener los productos: ", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [categoria])



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