Descripción

En este módulo crearemos una sencilla app de ecommerce utilizando React y Redux, donde los usuarios puedan ver los productos
 disponibles y agregarlos a un carrito de compras.

Requerimientos básicos: 

Ver una lista de productos disponibles: Estos serán datos estáticos almacenados en el estado inicial de Redux.
Agregar productos a su carrito: Deberás crear acciones y reducers correspondientes para manejar esta funcionalidad en Redux. 
Ver los productos en su carrito: Se deberá poder leer el estado de Redux para mostrar el carrito. 
Eliminar productos de su carrito: Necesitarás crear las acciones y reducers correspondientes para este fin.
Paso a paso:

Configuración inicial de Redux en el proyecto de React: Comienza con la creación de un proyecto de React. Después, instala y
 configura Redux. Deberás establecer un store para mantener el estado, ste estado inicial debe contener al menos dos cosas: 
 una lista de productos y un carrito de compras vacío. 
Definición de las acciones de Redux: Las acciones son una forma de enviar información al store de Redux. En este caso, necesitarás
 al menos tres acciones: una para agregar un producto al carrito, otra para eliminar un producto del carrito y una última para 
 visualizar los productos en el carrito. 
Creación de los reducers de Redux: Los reducers toman las acciones y realizan cambios en el estado Deberás crear al menos dos 
reducers: uno para manejar la lista de productos y otro para manejar el carrito de compras. Para la acción de agregar un producto
 al carrito, el reducer del carrito de compras debería agregar el producto al estado del carrito. Para la acción de eliminar un producto,
  el reducer debería eliminar el producto del estado del carrito. 
Creación de los componentes de React: Necesitarás al menos dos componentes principales: uno para mostrar la lista de productos y
 otro para mostrar el carrito de compras. El componente de la lista de productos debería recibir el estado de la lista de productos
  del store de Redux y mostrar cada producto con un botón para agregar el producto al carrito. El componente del carrito de compras
   debe recibir el estado del carrito del store de Redux y mostrar cada producto en el carrito con un botón para eliminar el producto 
   del carrito.

IMPORTANTE

Recuerda que Redux usa un flujo unidireccional de datos. Esto significa que los datos fluyen de las acciones (que describen lo que
 ocurrió) a los reducers (que determinan cómo el estado debe cambiar en base a esas acciones) y finalmente a los componentes de React
  (que se actualizan con el nuevo estado).


  //-------Comenzando el dev

  luego de eliminar los archivos innecesarios y de generar las carpetas adecuadas para el desarrollo, pensé en la posibilidad de utilizar la api
  fake-store que vimos en clases pasadas pero que no utilizamos

  la Api es la siguiente:

  https://fakestoreapi.com/products

  entonces,podemos utilizar el custom-hook que utilizamos en la app de las banderas para que haga la petición

  Listo, importamos los folders de Redux usados en la activiadad anterior y los adapatamos al nuevo proyecto

  así mismo utilizamos el custom hook para hacer la petición a la API y obtener los productos