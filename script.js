const questions = [{
    question: 'How many members of The Beatles were there?',
    answers: ['Two', 'Three', 'Four'],
    correct: 'Four',
}, {
    question: 'Which country did Abba come from?',
    answers: ['Sweden', 'Denmark', 'Finland'],
    correct: 'Sweden',
}, {
    question: 'Who had a hit with "Rocket Man"?',
    answers: ['Neil Young', 'Eric Clapton', 'Elton John'],
    correct: 'Elton John',
}]

let score = 0


const genQueAns = (array) => {
    array.forEach((item, index) => {

        // create root DIV
        const rootDiv = document.createElement('div')

        // append Question 
        rootDiv.appendChild(generateQuestionEl(item))

        //render answers using forEach
        item.answers.forEach((item) => {
            rootDiv.appendChild(generateAnswerEl(item, index))

        })
        // append to main-question-container
        document.querySelector('#main-question-container').appendChild(rootDiv)
    })
}

let runningTotal = 0

genQueAns(questions)

const getResults = () => {
    // i is generated to include within selector to target named groups
    for (let i = 0; i < questions.length; i++) {
        // returns nodelist containing items with a name matching selector
        const returnedthing = document.getElementsByName(`item_${i}`)
        returnedthing.forEach((item) => {
            if (item.checked && item.id == questions[i].correct) {
                runningTotal++
            }
        })
    }
}

document.querySelector('#show-results').addEventListener('click', (e) => {
    (getResults())
    const resultDOM = document.querySelector('#results')
    const totalPercentage = (runningTotal / questions.length) * 100
    resultDOM.textContent = `Your final score is ${totalPercentage.toFixed(0)}%!`
    runningTotal = 0
})