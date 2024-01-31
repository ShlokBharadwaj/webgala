const password = document.getElementById('password')
const background = document.getElementById('background')

function SpclChar(str) {
    var count = (str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length
    return count
}

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const splChar = SpclChar(input)
    const blurValue = 15 - (length*0.6 + splChar*1)
    background.style.filter = `blur(${blurValue}px)`
})