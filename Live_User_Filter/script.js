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

      console.log(user)
      li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name}">
      
      
      `
    })
}

getData()