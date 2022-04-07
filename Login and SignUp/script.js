const SignInBtn = document.querySelector('.SignInBtn')
const SignUpBtn = document.querySelector('.SignUpBtn')
const formBx = document.querySelector('.formBx')
const body = document.querySelector('body')

SignUpBtn.onclick = function(){
    formBx.classList.add('active')
    body.classList.add('active')
}

SignInBtn.onclick = function(){
    formBx.classList.remove('active')
    body.classList.remove('active')
}