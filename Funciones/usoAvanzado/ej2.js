const productos = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalón', precio: 30 },
  { nombre: 'Zapatos', precio: 50 },
];

productos.forEach((producto) => {
 producto.precio = producto.precio *0.9;
});
console.log(productos);
