
fetch( 'https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (response.ok) {
        return response.json(); 
        
    }
})
.then((data) => {
    console.log('Datos recibidos:', data);
})
