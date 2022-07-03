const result = document.querySelector('result')
const filter = document.querySelector('filter')
const listItems = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=69')

    const data = await res.json()

    console.log(data)
}

getData()