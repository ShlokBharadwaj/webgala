const quiz = document.getElementById('quiz')
const answerEle = document.querySelectorAll('answer')
const questionsEle = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currenQuiz = 0
let right = 0
let wrong = 0

loadQuiz()

function loadQuiz() {
    clrAns()
    const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple' 
    fetch(url).then(data=>data.json()).then(result=>{
        console.log(result)
        const quizData = result.results

        let correctAns = quizData[currenQuiz].correct_answer
        let incorrectAns = quizData[currenQuiz].incorrect_answers
        let options = incorrectAns
        options.splice(Math.floor(Math.random() * (incorrectAns.length * 1)), 0, correctAns)
        console.log(options)

        questionsEle.innerHTML = quizData[currenQuiz].question
        a_text.innerHTML = options[0]
        b_text.innerHTML = options[1]
        c_text.innerHTML = options[2]
        d_text.innerHTML = options[3]
    })
}

function clrAns() {
    answerEle.forEach(answerEle => answerEle.checked = false)
}

submitBtn.addEventListener('click', () => {

})