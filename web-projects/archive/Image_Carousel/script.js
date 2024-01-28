const imgs = document.getElementById('img')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


const img = document.querySelectorAll('#img img')

let idx = 0

let interval = setInterval(run,  1500)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    }
    else if(idx < 0) {
        idx = img.length - 1 
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 1500)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})