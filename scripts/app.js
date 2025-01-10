const question = document.getElementById('textField');
const answer = document.getElementById('answer');
const questionAsked = document.getElementById('question');
const btn = document.getElementById('submitBtn');
const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Definitely",
    "You may rely on it",
    "Yes",
    "Most likely",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask Again Later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and Ask Again",
    "Better not count on it",
    "My reply is no",
    "My sources say no",
    "Very doubtful"
];

question.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        btn.click();
    }
})

const askQuestion = (text) => {
    questionAsked.textContent = text;
};

btn.addEventListener("click", () => {
    if (question.value.trim() === "") return;
    question.textContent = askQuestion(question.value);
    question.value = "";
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answer.textContent = randomAnswer;
});