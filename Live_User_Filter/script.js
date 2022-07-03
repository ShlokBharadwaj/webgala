const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=69')

    const {results} = await res.json()

    result.innerHTML = ''

    results.forEach(user => {
      const li = document.createElement('li')

      listItems.push(li)

      li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name}">
      <div class="user-info">
        <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <p><strong>Age:</strong> ${user.dob.age}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country} - ${user.location.postcode}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone No.:</strong> ${user.phone}</p>
        <p><strong>Username:</strong> ${user.login.username}</p>
        <p><strong>Password:</strong> ${user.login.password}</p>
      <div>
      `

      result.appendChild(li)
    })
}

getData()