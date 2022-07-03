const result = document.querySelector('result')
const filter = document.querySelector('filter')
const listItems = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=69')

    const {results} = await res.json()

    results.innerHTML = ''

    results.forEach(user => {
      const li = document.createElement('li')

      listItems.push(li)

      li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name}">
      <div class="user-info">
        <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <p>${user.dob.age}</p>
        <p>${user.email}</p>
        <p>${user.location.city} ${user.location.country} ${user.location.postcode}</p>
        <p>${user.phone}</p>
        <p>${user.login.username} ${user.login.password}</p>
      <div>
      `
    })
}

getData()