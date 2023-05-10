/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const form = document.querySelector("form");
const ResultContent = document.querySelector(".ResultBackground");
const Answers = ['D', 'B', 'C', 'D'];

let score = 0;
let timer;

let UserAnswer = [];

const getAnswers = () => {
    const UserAnswer = Answers.map((_, index) =>
    form[`question${index + 1}`].value);
    
    return UserAnswer;
};

const calculateUserScore = UserAnswer => {
    UserAnswer.forEach((UserAnswer, index) => {
        const IsUserAnswerCorrect = UserAnswer === Answers[index];
        if (IsUserAnswerCorrect) {
            score += 25;
        }

    });
}

const scrollAndShowScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    ResultContent.style.display = 'block';
}

const addAnimation = () => {
    let counter = 0;
    timer = setInterval(() => {
        let CounterequalScore = counter === score;

        if (CounterequalScore) clearInterval(timer);
            percentage.textContent = `${counter++}%`;
    }, 10);
}

const resetScore = () => {
    score = 0;
}

const EventsSubmit = (event) => {
    event.preventDefault();

    const UserAnswers = getAnswers();

    resetScore();
    calculateUserScore(UserAnswers);
    scrollAndShowScore();
    addAnimation();
    
}

form.addEventListener("submit", EventsSubmit);



