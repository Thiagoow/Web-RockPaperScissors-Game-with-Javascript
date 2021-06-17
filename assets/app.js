//SEMPRE TESTAMOS USANDO O console.log() NA VAR OU FUNÇÃO❗❗

//Essas serão as vars para contar os pontos:
const userScore = 0;
const compScore = 0;

//Selecionando as divs do HTML para exibir os pontos contados:
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("computerScore");

//
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultDiv = document.querySelector(".result");

/* Selecionando as divs de escolha de jogo do usuário 
para verificar qual escolha ele fez: */
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorDiv = document.getElementById("s");

//Faz o computador ter escolhas aleatórias entre as opções de jogo:
function computerChoice() {
  const choices = ["r", "p", "s"];
  //Faz o pc escolher um número aleatório entre 0 e 2:
  /*(o math.floor arredonda pra baixo, do num inteiro
  mais próximo, ou seja, se der 1,222 = 1)*/
  const randomNum = Math.floor(Math.random() * 3);
  /* Troca a escolha aleatória do pc de num pra
  um dos elementos da array choices: */
  return choices[randomNum];
}

//
function game(userChoice) {
  const cpuMove = computerChoice();
  console.log("PC -> " + cpuMove);
  console.log("User -> " + userChoice);
}

//Verifica qual escolha o usuário fez:
function clicked() {
  rockDiv.addEventListener("click", function () {
    game("r");
  });

  paperDiv.addEventListener("click", function () {
    game("p");
  });

  scissorDiv.addEventListener("click", function () {
    game("s");
  });
}
clicked();
