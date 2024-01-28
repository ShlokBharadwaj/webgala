const textEle = document.getElementById('text')
const speedEle = document.getElementById('speed')
const text = "Shlok Bharadwaj"
let idx = 1
let speed = 300 / speedEle.value

writeText()

function writeText() {
    textEle.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length)
        idx = 1

    setTimeout(writeText, speed)
}

speedEle.addEventListener('input', (e) => speed = 300/e.target.value)