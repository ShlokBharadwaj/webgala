const password = document.getElementById('password')
const background = document.getElementById('background')

function SpclChar(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return specialChars.test(str)
}

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 15 - length*1.5
    background.style.filter = `blur(${blurValue}px)`
})