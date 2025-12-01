fetch('https://randomuser.me/api/')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    const user = data.results[0];
    const p1 = document.createElement('p');
    const dir = document.createElement('p');
    const email = document.createElement('p');
    const box = document.getElementById('box');
    const country = document.createElement('p');
    const imga = document.getElementById('i');
    p1.textContent = `${user.name.first}  ${user.name.last}`;
    email.textContent = `Email: ${user.email}`;
    dir.textContent = `${user.location.street.number} ${user.location.street.name}`;
    country.textContent = `${user.location.city} ${user.location.state}`;
    imga.src = user.picture.large;
    box.appendChild(p1);
    box.appendChild(email);
    box.appendChild(dir);
    box.appendChild(country);
});
