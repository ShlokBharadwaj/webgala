const container = document.getElementById('container')
const colors = ["#ff595e","ffca3a","#8ac926","#1982c4","#6a4c93", "#3772ff", "#ff7b00", "#ffe900", "#f7ec13", "#f1c0e8", "#7b2cbf", "#ff006e", "#00f5d4", "#7f5539", "#9b5de5"]
const SQUARES = 500

for(let i=0; i<SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}