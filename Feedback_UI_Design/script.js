const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let myRating = 'Happy'
const ratingsCont = document.querySelector('.ratings-container')

ratingsCont.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        myRating = e.target.nextElementSibling.innerHTML
    }
})

function removeActive() {
    ratings.forEach(element => {
        element.classList.remove('active')
    })
}

sendBtn.addEventListener('click', (e) => {
    console.log(myRating)
    if(myRating === 'Happy') {
        panel.innerHTML = `
        <i class="fa-solid fa-heart-circle-check"></i>
        <strong<Thank You!</strong>
        <br>
        <strong>Feedback: ${myRating}</strong>
        <p>We appreciate your feedback and we'll try to improve our customer support!</p>
    `
    }
    if(myRating === 'Neutral') {
        panel.innerHTML = `
        <i class="fa-solid fa-heart"></i>
        <strong<Thank You!</strong>
        <br>
        <strong>Feedback: ${myRating}</strong>
        <p>We appreciate your feedback and we'll try to improve our customer support!</p>
    `
    }
    if(myRating === 'Unhappy') {
        panel.innerHTML = `
        <i class="fa-solid fa-heart-crack"></i>
        <strong<Thank You!</strong>
        <br>
        <strong>Feedback: ${myRating}</strong>
        <p>We appreciate your feedback and we'll try to improve our customer support!</p>
    `
    }
})