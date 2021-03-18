let num;

let score;

const array = [
    { question1 : 'first question',
    correctAnswer : 'a'},
    {question2 : 'second question',
    correctAnswer : 'b'},
    {question3 : 'third question',
    correctAnswer : 'c'},
    {question4 : 'fourth question',
    correctAnswer : 'c'},
]

const filter = array.filter((item) => item.correctAnswer === 'c')

console.log(filter);