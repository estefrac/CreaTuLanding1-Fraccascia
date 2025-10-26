# 🧭 Entrega 2: Navega las rutas

## Descripción
Implementa una herramienta de **routing**, la cual permitirá navegar a través de las diferentes vistas para tu tienda:

- 🛍️ Catálogo principal de productos  
- 🧩 Catálogo de productos filtrados por categorías  
- 🔍 Vista en detalle de un producto  

Crea la funcionalidad necesaria para que los usuarios puedan:

- Seleccionar desde el menú las distintas categorías disponibles.  
- Visualizar el listado, filtrando según esa elección.  
- Seleccionar un producto del listado y acceder a una vista en detalle del mismo, donde además contarán con una interfaz que posteriormente les permita agregar unidades al carrito.  

---

## 🎯 Objetivos

- Implementar la **funcionalidad de navegación** entre las diferentes vistas utilizando **enlaces y rutas**.  
- Desarrollar la **navegabilidad básica** de la aplicación, permitiendo navegar desde el catálogo al detalle de cada ítem.  

---

## ⚙️ Requisitos

- Implementación de **React Router** y creación de las distintas rutas necesarias para mostrar las vistas de la app.  
- División entre:
  - **Componentes contenedores:** encargados de manejar el estado y los efectos (`ItemListContainer`, `ItemDetailContainer`).
  - **Componentes de presentación:** encargados del apartado visual (estructura de elementos, estilos, `className`, etc.).
- Los componentes contenedores deberán hacer un **llamado asíncrono a Promises** que resuelvan luego de un breve retardo los datos solicitados (listado de productos o un producto en particular).  
- Uso del método **`Array.map()`** y la prop **`key`** para listar todos los productos en el catálogo.  
- Uso del hook **`useParams()`** de React Router para leer el segmento actual de la URL y mostrar el contenido correspondiente.  

---

## 💡 Recomendaciones

- Incluí los **parámetros URL** en el array de dependencias de tu `useEffect` para generar las actualizaciones necesarias al navegar.  
- ⚠️ **No crees diferentes rutas para cada categoría.** Puede parecer una solución simple al principio, pero complicará la escalabilidad y mantenimiento del proyecto a futuro.  
- Crear una **ruta tipo “404” (`path="*"`)** es una buena práctica: te ayudará a detectar errores de navegación y enlaces mal formateados.  
- Podés incluir el componente **`ItemCount`** dentro del componente **`ItemDetail`**.  

---

## 🛠️ Tecnologías utilizadas

- React  
- React Router DOM  
- JavaScript (ES6+)  
- CSS / Tailwind / Styled Components (según preferencia del alumno)

---

## 🚀 Resultado esperado

Una aplicación con navegación funcional entre las distintas vistas de la tienda, incluyendo:
- Catálogo general  
- Catálogo filtrado por categoría  
- Detalle individual del producto  
