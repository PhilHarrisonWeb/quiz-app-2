const questions = [{
    question: 'How many members of The Beatles were there?',
    answers: ['Two', 'Three', 'Four'],
    correct: 'Four'
}, {
    question: 'From which country did Abba come from?',
    answers: ['Sweden', 'Denmark', 'Finland'],
    correct: 'Sweden'
}, {
    question: 'Who had a hit with "Rocket Man"?',
    answers: ['Neil Young', 'Eric Clapton', 'Elton John'],
    correct: 'Elton John'
}]

// here i could generate a random number 
let index = 1


// NEED TO PERFORM THE BELOW FOR EVERY QUESTION IN THE ARRAY
const generateQuestion = function (array) {
    // create root DIV
    const rootDiv = document.createElement('div')

    // create questionTextEL and set text conent
    const questionTextEl = document.createElement('p')
    questionTextEl.textContent = array[index].question
    rootDiv.appendChild(questionTextEl)


    const answerDiv = document.createElement('div')
    //render answers using forEach
    array[index].answers.forEach(function (item) {
        // create answerEL
        const answerEl = document.createElement('input')
        answerEl.setAttribute('type', 'radio')
        answerEl.setAttribute('name', 'question1')

        const label = document.createElement('label')
        // answerEl.setAttribute('for', )
        label.innerHTML = item
        answerDiv.appendChild(label)
        answerDiv.appendChild(answerEl)
    })

    // append to body
    document.querySelector('#container').appendChild(rootDiv)
    document.querySelector('#container').appendChild(answerDiv)
}


generateQuestion(questions)















// const index = null

// const qDOMconstruct = function (question, ) {
//     this.question = question
//     this.ans1 = ans1
//     this.ans2 = ans2
//     this.ans3 = ans3
// }


// // render question and answers for Q1

// const questionDOM = document.querySelector('#question')
// questionDOM.textContent = `${questions[0].question}`

// const ans1 = document.querySelector('#lab1')
// ans1.textContent = `${questions[0].answers[0]}`

// const ans2 = document.querySelector('#lab2')
// ans2.textContent = `${questions[0].answers[1]}`

// const ans3 = document.querySelector('#lab3')
// ans3.textContent = `${questions[0].answers[2]}`

// // render question and answers for Q2

// const ans1 = document.querySelector('#lab1')
// ans1.textContent = `${questions[1].answers[0]}`

// const ans2 = document.querySelector('#lab2')
// ans2.textContent = `${questions[1].answers[1]}`

// const ans3 = document.querySelector('#lab3')
// ans3.textContent = `${questions[1].answers[2]}`

// const question2DOM = document.querySelector('#question')
// questionDOM.textContent = `${questions[0].question}`