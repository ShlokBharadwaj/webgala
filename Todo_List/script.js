const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEle = document.createElement('li')
        todoEle.classList.add('border-t', 'border-solid', 'border-slate-300', 'cursor-pointer', 'text-[1.5rem]', 'pt-4', 'pb-4', 'pl-4', 'pr-4')
        if (todo && todo.completed) {
            todoEle.classList.add('completed')
        }

        todoEle.innerText = todoText

        todoEle.addEventListener('click', () => {
            todoEle.classList.toggle('completed')
            updateLS()
        })

        todoEle.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEle.remove()
            updateLS()
        })

        todosUL.appendChild(todoEle)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEle => {
        todos.push({
            text: todoEle.innerText,
            completed: todoEle.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

