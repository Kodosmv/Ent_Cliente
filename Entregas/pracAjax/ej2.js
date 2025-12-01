const idUsu = document.getElementById('numId');
const env = document.getElementById('env');

env.addEventListener('click', () => {
  fetch(`https://dummyjson.com/products/${idUsu.value}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error HTTP: ${response.status}`);
      }
    })
    .then((data) => {
      console.log(data);
      const id = document.createElement('p');
      const titulo = document.createElement('p');
      const precio = document.createElement('p');
      const tit = document.createElement('h1');
      const box = document.getElementById('box');
      id.textContent = `${idUsu.value}`;
      titulo.textContent = `${data.title}`;
      precio.textContent = `${data.price}l`;
      box.appendChild(id);
      box.appendChild(precio);
      box.appendChild(titulo);

      const datos = {
        ID: `${idUsu.value}`,
        Nom: `${data.title}`,
        Precio: `${data.pri}`,
      };
      //API de prueba,los datos no se guardan realmente pero obtienes una respuesta simulada
      return fetch(`https://httpbin.org/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        })
        .then((data) => {
          console.log('Respuesta del servidor:', data);
          tit.textContent = `Titulo : ${datos.Nom}`;
          box.appendChild(tit);
        })
        .catch((error) => {
          console.error('Error en la petición:', error);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
});
