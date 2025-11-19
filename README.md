# 🛒 E-commerce AM - Stickers | CoderHouse

## 📋 Descripción del Proyecto

Este proyecto es una **Single Page Application (SPA)** de e-commerce desarrollada con **React** como entrega final del curso de React JS de CoderHouse. La aplicación permite a los usuarios navegar por un catálogo de stickers, filtrar por categorías, ver detalles de productos, agregar items al carrito de compras y finalizar la compra con integración a Firebase.

El proyecto implementa patrones y conceptos específicos de React como el Virtual DOM, hooks personalizados, Context API para manejo de estado global, navegación con React Router, y una arquitectura de componentes organizada en contenedores y presentacionales.

---

## ✨ Funcionalidades Principales

### 🏪 Catálogo de Productos

- **Listado completo** de productos almacenados en Firebase Firestore
- **Filtrado por categorías** mediante parámetros de URL
- **Carga asíncrona** con indicadores visuales (loaders)

### 📦 Detalle de Productos

- Vista detallada con imagen, descripción, precio y stock disponible
- **Selector de cantidad** con validación de stock máximo
- Dos opciones de compra:
  - **"Agregar al carrito"**: añade el producto y permanece en la página
  - **"Comprar ahora"**: agrega el producto y redirige directamente al checkout

### 🛍️ Carrito de Compras

- **Persistencia** mediante localStorage (mantiene items al recargar la página)
- Visualización de productos agregados con imagen, nombre, cantidad y subtotal
- **Gestión de cantidades**: suma automática si se agrega el mismo producto
- Cálculo de **totales** (cantidad de items y precio total)
- Opciones para **vaciar carrito** o **eliminar productos individuales**
- Estado vacío con mensaje cuando no hay productos
- **Widget en navbar** que muestra el total de items en tiempo real

### 💳 Proceso de Checkout

- **Formulario** con validación de datos del comprador (nombre, email, teléfono)
- Generación de **orden de compra** en Firebase Firestore
- **Vaciado automático** del carrito al finalizar la compra
- Pantalla de **confirmación** con número de orden generado
- Estructura de orden que incluye: datos del comprador, productos y total

### 🧭 Navegación

- **Single Page Application** sin recargas de página
- Navegación fluida entre secciones mediante React Router
- Rutas implementadas:
  - `/` - Catálogo completo
  - `/categoria/:categoria` - Productos filtrados por categoría
  - `/detalle/:id` - Detalle de producto individual
  - `/cart` - Vista del carrito de compras
  - `/checkout` - Formulario de checkout
  - `*` - Página 404 para rutas no encontradas

---

## 🏗️ Arquitectura de Componentes

### Componentes Contenedores

- **`ProductListContainer`**: Gestiona la obtención de productos desde Firebase y el filtrado por categoría
- **`ProductDetailContainer`**: Maneja la carga del producto individual desde Firestore

### Componentes de Presentación

- **`NavBar`**: Barra de navegación con enlaces a categorías y widget del carrito
- **`CartWidget`**: Icono del carrito con contador de items
- **`ProductList`**: Renderiza el grid de productos
- **`ProductCard`**: Tarjeta individual de producto
- **`ProductDetail`**: Vista detallada del producto
- **`ProductCount`**: Selector de cantidad con botones de incremento/decremento
- **`Cart`**: Vista del carrito con lista de productos y totales
- **`Checkout`**: Contenedor del formulario y confirmación de orden
- **`FormCheckout`**: Formulario de datos del comprador
- **`Error404`**: Página de error para rutas no encontradas

### Context

- **`CartContext`**: Manejo del estado global del carrito con las siguientes funcionalidades:
  - `addProduct`: Agrega productos o suma cantidades si ya existen
  - `deleteProductById`: Elimina un producto específico
  - `clearCart`: Vacía el carrito completamente
  - `totalQuantity`: Calcula el total de items
  - `totalPrice`: Calcula el precio total
  - Sincronización automática con localStorage

---

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Librería principal
- **Vite 7.1.7** - Build tool y dev server
- **React Router DOM 7.9.4** - Navegación y routing
- **Firebase 12.6.0** - Backend as a Service
  - **Firestore** - Base de datos NoSQL para productos y órdenes
- **Lucide React 0.548.0** - Librería de iconos
- **React Spinners 0.17.0** - Componentes de loading
- **CSS3** - Estilos personalizados con gradientes y diseño responsivo

---

## 📂 Estructura del Proyecto

```
ecommerce-88020/
├── src/
│   ├── components/
│   │   ├── Cart/              # Vista del carrito
│   │   ├── CartWidget/        # Widget contador en navbar
│   │   ├── Checkout/          # Proceso de compra
│   │   ├── FormCheckout/      # Formulario de checkout
│   │   ├── Error404/          # Página de error
│   │   ├── NavBar/            # Barra de navegación
│   │   ├── ProductCard/       # Tarjeta de producto
│   │   ├── ProductCount/      # Selector de cantidad
│   │   ├── ProductDetail/     # Detalle del producto
│   │   ├── ProductDetailContainer/
│   │   ├── ProductList/       # Grid de productos
│   │   └── ProductListContainer/
│   ├── context/
│   │   └── CartContext.jsx    # Estado global del carrito
│   ├── data/
│   │   └── products.json      # Datos mock de productos
│   ├── db/
│   │   └── db.js             # Configuración de Firebase
│   ├── utils/
│   │   └── seedProducts.js   # Script para poblar Firestore
│   ├── App.jsx               # Componente principal con rutas
│   └── main.jsx              # Entry point
├── public/
│   └── img/                  # Imágenes de productos
└── package.json
```

---

## 🚀 Instalación y Uso

### Prerequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Firebase con proyecto creado

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/estefrac/CreaTuLanding1-Fraccascia.git
cd ecommerce-88020
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar Firebase**

- Crear un archivo `src/db/db.js` con tus credenciales de Firebase:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
```

4. **Poblar la base de datos** (opcional)

- Abrir `src/utils/seed.html` en el navegador para cargar los productos iniciales a Firestore

5. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

6. **Abrir en el navegador**

- La aplicación estará disponible en `http://localhost:5173`

---

## 🔥 Colecciones de Firebase

### Colección `products`

```javascript
{
  id: string,
  nombre: string,
  descripcion: string,
  precio: number,
  stock: number,
  imagen: string,
  categoria: string // "coderhouse", "javascript", "react", "reactnative"
}
```

### Colección `orders`

```javascript
{
  buyer: {
    nombre: string,
    email: string,
    telefono: string
  },
  products: [
    {
      id: string,
      nombre: string,
      precio: number,
      quantity: number,
      // ... otros campos del producto
    }
  ],
  total: number,
  // timestamp automático de Firestore
}
```

---

## 🎨 Diseño y Estilos

- **Paleta de colores**: Gradientes morados (#3B3486 a #7872b8)
- **Diseño responsivo** con CSS Grid y Flexbox
- **Mobile-first approach** con media queries
- **Animaciones** y transiciones suaves
- **Iconografía** consistente con Lucide React

---

## 📝 Características Técnicas Destacadas

- ✅ **Arquitectura modular** con separación de responsabilidades
- ✅ **Hooks personalizados** y uso de hooks nativos (useState, useEffect, useContext, useParams, useNavigate)
- ✅ **Context API** para estado global sin prop drilling
- ✅ **Renderizado condicional** para loaders, mensajes y estados vacíos
- ✅ **Persistencia de datos** con localStorage
- ✅ **Consultas optimizadas** a Firestore con filtros condicionales
- ✅ **Validaciones** de stock y formularios
- ✅ **Single Page Application** sin recargas de página
- ✅ **Manejo de errores** y página 404

---

## 👨‍💻 Autor

**Esteban Fraccascia**

- Proyecto final - CoderHouse React JS
- Comisión: 88020

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte del curso de React JS de CoderHouse
