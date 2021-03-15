const questions = [{
    question: 'How many members of The Beatles were there?',
    answers: ['Two', 'Three', 'Four'],
    correct: 'Four',
    id: uuidv4()
}, {
    question: 'Which country did Abba come from?',
    answers: ['Sweden', 'Denmark', 'Finland'],
    correct: 'Sweden',
    id: uuidv4()
}, {
    question: 'Who had a hit with "Rocket Man"?',
    answers: ['Neil Young', 'Eric Clapton', 'Elton John'],
    correct: 'Elton John',
    id: uuidv4()
}]

let score = 0

// NEED TO PERFORM THE BELOW FOR EVERY QUESTION IN THE ARRAY

const genQueAns = (array) => {
    array.forEach((item) => {

        // uniqueID becomes current items uuid
        let uniqueID = item.id

        // create root DIV
        const rootDiv = document.createElement('div')

        // append Question 
        rootDiv.appendChild(generateQuestionEl(item))

        //render answers using forEach
        item.answers.forEach((item) => {
            rootDiv.appendChild(generateAnswerEl(item, uniqueID))

        })
        // append to main-question-container
        document.querySelector('#main-question-container').appendChild(rootDiv)
    })
}


genQueAns(questions)















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