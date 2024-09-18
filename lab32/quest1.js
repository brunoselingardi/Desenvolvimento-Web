const questions = [
    {
        question: "Qual dessas palavras não tem relação com sustentação?",
        answers: ["Ruína","Fundamento","Base","Alicerce"],
        correctAnswer: 0
    },
    {
        question: "D. Pedro I do Brasil foi um:",
        answers: ["Imperador","Almirante","Jesuíta","Explorador"],
        correctAnswer: 0
    },
    {
        question: "O pó-de-mico quando entra em contato com a pele provoca qual tipo de reação?",
        answers: ["Frio","Cocegas","Dor","Tristeza"],
        correctAnswer: 1
    },
    {
        question: "A canção “Uni, Duni, Tê” foi um sucesso de qual desses grupos infantis?",
        answers: ["Molekada","Balão Magico","Família chocolate","Trem da alegria"],
        correctAnswer: 3
    },
    {
        question: "Cururu é uma espécie de:",
        answers: ["Cobra","Ave","Peixe","Sapo"],
        correctAnswer: 3
    }
];

function loadQuestions(){
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
        score++;}
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;