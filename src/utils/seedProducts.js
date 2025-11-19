import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import products from "../data/products.json";


const seedProducts = async () => {
    try {
        const productsCollection = collection(db, "products");
        // eslint-disable-next-line no-unused-vars
        products.map(async ({ id,...dataProduct })=>{
           await addDoc(productsCollection, dataProduct)
        });

        console.log("Productos agregados correctamente");
    } catch (error) {
        console.error("Error seeding products: ", error);
    }
}

seedProducts()