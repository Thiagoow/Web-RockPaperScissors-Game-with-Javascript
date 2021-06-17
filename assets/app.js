//SEMPRE TESTAMOS USANDO O console.log() NA VAR OU FUNÇÃO❗❗

//Essas serão as vars para contar os pontos:
let userScore = 0;
let compScore = 0;

//Selecionando as divs do HTML para exibir os pontos contados:
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("computerScore");

//
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultP = document.querySelector(".result p");
const resultB = document.querySelector(".result b");

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

/*Executa as funções de vitória, derrota ou 
empate de acordo com as escolhas do pc e do user: */
function game(userChoice) {
  const cpuMove = computerChoice();
  switch (userChoice + cpuMove) {
    case "rp":
    case "pr":
    case "sp":
      resWin(userChoice, cpuMove);
      break;
    case "rp":
    case "ps":
    case "sr":
      resLose(userChoice, cpuMove);
      break;
    case "rr":
    case "pp":
    case "ss":
      resDraw(userChoice, cpuMove);
      break;
  }
}

//Muda as letras "r, p, s" pra "Pedra, Papel, Tesoura"
function convert2Word(letter) {
  if (letter === "r") return "✊";
  if (letter === "p") return "📃";
  return "✂️";
}

//Se o usuário ganhar:
function resWin(user, comp) {
  //Soma +1 ponto pro user:
  userScore++;
  //Exibe na div do html os pontos do usuário:
  userScoreSpan.innerHTML = userScore;
  //Atualiza o HTML com os res:
  resultP.innerHTML = `${convert2Word(user)} ganha de ${convert2Word(
    comp
  )}! Você`;
  resultB.innerHTML = " VENCEU! 🤩😎";
  //Deixa a cor da tag b:
  resultB.style.color = "rgb(9, 255, 0)";
}

//Se o usuário perder:
function resLose(user, comp) {
  //Soma +1 ponto pro user:
  compScore++;
  //Exibe na div do html os pontos da CPU:
  compScoreSpan.innerHTML = compScore;
  //Atualiza o HTML com os res:
  resultP.innerHTML = `${convert2Word(user)} ganha de ${convert2Word(
    comp
  )}! Você`;
  resultB.innerHTML = " PERDEU! 🥺😥";
  //Deixa a cor da tag b:
  resultB.style.color = "rgb(255, 0, 0)";
}

//Se der empate:
function resDraw(user, comp) {
  //Atualiza o HTML com os res:
  resultP.innerHTML = `${convert2Word(user)} = ${convert2Word(comp)}! Vocês`;
  resultB.innerHTML = " EMPATARAM 😱 ";
  //Deixa a cor da tag b:
  resultB.style.color = "rgb(0, 17, 255)";
}
