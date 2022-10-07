const quizData = [
    {
        question: "The Maxim 'Actus non facit reanisi mens sit rea' means?",
        a: "Crime has to be coupled with gilty mind",
        b: "There can be no crime without a gilty mind",
        c: "Crime is the result of a gilty mind",
        d: "Criminal mind leads to crime",
        correct: "d",
    },
    {
        question: "Section 84 of IPC provides for",
        a: "Legal insanity",
        b: "Medical insanity",
        c: "Moral insanity",
        d: "Unsound insanity",
        correct: "a",
    },
    {
        question: "Laying a trap is a part of",
        a: "Preliminary inquiry",
        b: "Trial",
        c: "Investigation",
        d: "Inquiry",
        correct: "c",
    },
    {
        question: "IPC is divided into how many sections?",
        a: "511 sections",
        b: "512 sections",
        c: "515 sections",
        d: "520 sections",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})