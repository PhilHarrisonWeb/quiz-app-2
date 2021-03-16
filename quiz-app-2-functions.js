const generateQuestionEl = (item) => {
    const questionTextEl = document.createElement('p')
    questionTextEl.textContent = item.question
    return questionTextEl

}

const generateAnswerEl = (item, index) => {
    // create div
    const answerDiv = document.createElement('div')

    //find index of currently processed item

    // create answerEL
    const answerEl = document.createElement('input')
    answerEl.setAttribute('type', 'radio')
    answerEl.setAttribute('id', item)
    answerEl.setAttribute('value', item)
    answerEl.setAttribute('name', `item_${index}`)

    const label = document.createElement('label')
    // answerEl.setAttribute('for', )
    label.innerHTML = item
    label.htmlFor = item
    answerDiv.appendChild(label)
    answerDiv.appendChild(answerEl)

    return answerDiv
}