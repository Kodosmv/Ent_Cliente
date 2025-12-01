const lista = document.getElementById('lista');

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    if (response.ok) {
        return response.json(); 
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
})
.then((data) => {
    data.forEach(user => {
        const li = document.createElement('li');
        li.textContent= `${user.name} - ${user.email}`;
        lista.appendChild(li)
    });
 
})
.catch((error) => {
console.error('Error en la petición:', error);
});
