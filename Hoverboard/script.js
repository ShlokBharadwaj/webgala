const container = document.getElementById('container')
const colors = ["#03045e","023e8a","#0077b6","#0096c7","#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"]
const SQUARES = 500

for(let i=0; i<SQUARES; i++) {
    const squares = document.createElement('div')
    squares.classList.add('square')
    container.appendChild(squares)
}