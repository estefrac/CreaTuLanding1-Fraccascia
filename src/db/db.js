import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL3wHz8klKcR7Qg9-ftpGwKVhvOaKFh24",
  authDomain: "amstickers-ecommerce.firebaseapp.com",
  projectId: "amstickers-ecommerce",
  storageBucket: "amstickers-ecommerce.firebasestorage.app",
  messagingSenderId: "450926893389",
  appId: "1:450926893389:web:1249026464235fa2abff04",
  measurementId: "G-BH3EKNX1XE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;