const generateQuestionEl = (item) => {
    const questionTextEl = document.createElement('p')
    questionTextEl.textContent = item.question
    return questionTextEl

}

const generateAnswerEl = (item) => {
    // create div
    const answerDiv = document.createElement('div')

    // create answerEL
    const answerEl = document.createElement('input')
    answerEl.setAttribute('type', 'radio')
    answerEl.setAttribute('name', 'question1')

    const label = document.createElement('label')
    // answerEl.setAttribute('for', )
    label.innerHTML = item


    answerDiv.appendChild(label)
    answerDiv.appendChild(answerEl)

    return answerDiv
}