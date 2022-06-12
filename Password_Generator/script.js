const resultEle = document.getElementById('result')
const lengthEle = document.getElementById('length')
const uppercaseEle = document.getElementById('uppercase')
const lowercaseEle = document.getElementById('lowercase')
const numberEle = document.getElementById('numbers')
const symbolEle = document.getElementById('symbols')
const generateEle = document.getElementById('generate')
const clipboardEle = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

generateEle.addEventListener('click', () => {
    const length = +lengthEle.value // + is added so that the value we get is a number not a string
    const hasLower = lowercaseEle.checked
    const hasUpper = uppercaseEle.checked
    const hasSymbol = symbolEle.checked
    const hasNumber = numberEle.checked

    resultEle.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0)
        return ''

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPass = generatedPassword.slice(0, length)

    return finalPass
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) +48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()[]{}=<>/|,.~`'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
