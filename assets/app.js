//SEMPRE TESTAMOS USANDO O console.log() NA VAR OU FUNÇÃO❗❗

//Essas serão as vars para contar os pontos:
let userScore = 0;
let compScore = 0;

//Selecionando as divs do HTML para exibir os pontos contados:
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("computerScore");

//Selecionando as divs do HTML pra exibir o resultado em texto:
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
  rockDiv.addEventListener("click", () => {
    game("r");
  });

  paperDiv.addEventListener("click", () => {
    game("p");
  });

  scissorDiv.addEventListener("click", () => {
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
  //Muda a cor da tag b:
  resultB.style.color = "rgb(9, 255, 0)";

  //Var que guarda a escolha do usuário:
  const userChoice = document.getElementById(user);
  /* Atribui à escolha do user a classe que 
  dá um efeito na borda: */
  userChoice.classList.add("winEffect");
  //Tira a classe de efeito na borda:
  setTimeout(() => {
    userChoice.classList.remove("winEffect");
  }, 700);

  //Sistema de vitória ou derrota:
  if (userScore > 9 || compScore > 9) {
    //Muda o texto e dá o alerta no navegador:
    if (userScore > compScore) {
      resultP.innerHTML = "YOU";
      resultB.innerHTML = " WIN 🤩🤩😎";
      resultB.style.color = "rgb(9, 255, 0)";
      alert("Você venceu! 🤩😎 PARABÉNS!!!");
    } else {
      resultP.innerHTML = "YOU";
      resultB.innerHTML = " LOSE 🥺😕";
      resultB.style.color = "rgb(255, 0, 0)";
      alert("CPU venceu! 😭🥺 TENTE NOVAMENTE");
    }
    //Executa a função que reseta os pontos do user e do pc:
    resetPoints();
  }
}

//Se o usuário perder:
function resLose(user, comp) {
  //Soma +1 ponto pro user:
  compScore++;
  //Exibe na div do html os pontos da CPU:
  compScoreSpan.innerHTML = compScore;
  //Atualiza o HTML com os res:
  resultP.innerHTML = `${convert2Word(comp)} ganha de ${convert2Word(
    user
  )}! Você`;
  resultB.innerHTML = " PERDEU! 🥺😥";
  //Muda a cor da tag b:
  resultB.style.color = "rgb(255, 0, 0)";

  //Var que guarda a escolha do usuário:
  const userChoice = document.getElementById(user);
  /* Atribui à escolha do user a classe que 
  dá um efeito na borda: */
  userChoice.classList.add("loseEffect");
  /*Tira a classe de efeito na borda:*/
  setTimeout(() => {
    userChoice.classList.remove("loseEffect");
  }, 700);

  //Sistema de vitória ou derrota:
  if (userScore > 9 || compScore > 9) {
    //Muda o texto e dá o alerta no navegador:
    if (userScore > compScore) {
      resultP.innerHTML = "YOU";
      resultB.innerHTML = " WIN 🤩🤩😎";
      resultB.style.color = "rgb(9, 255, 0)";
      alert("Você venceu! 🤩😎 PARABÉNS!!!");
    } else {
      resultP.innerHTML = "YOU";
      resultB.innerHTML = " LOSE 🥺😕";
      resultB.style.color = "rgb(255, 0, 0)";
      alert("CPU venceu! 😭🥺 TENTE NOVAMENTE");
    }
    //Executa a função que reseta os pontos do user e do pc:
    resetPoints();
  }
}

//Se der empate:
function resDraw(user, comp) {
  //Atualiza o HTML com os res:
  resultP.innerHTML = `${convert2Word(user)} = ${convert2Word(comp)}! é um`;
  resultB.innerHTML = " EMPATE 😱 ";
  //Muda a cor da tag b:
  resultB.style.color = "rgb(0, 17, 255)";

  //Var que guarda a escolha do usuário:
  const userChoice = document.getElementById(user);
  /* Atribui à escolha do user a classe que 
  dá um efeito na borda: */
  userChoice.classList.add("drawEffect");
  //Tira a classe de efeito na borda
  setTimeout(() => {
    userChoice.classList.remove("drawEffect");
  }, 700);

  //Sistema de vitória ou derrota:
  if (userScore > 9 || compScore > 9) {
    //Muda o texto e dá o alerta no navegador:
    if (userScore > compScore) {
      resultP.innerHTML = "YOU";
      resultB.innerHTML = " WIN 🤩🤩😎";
      resultB.style.color = "rgb(9, 255, 0)";
      alert("Você venceu! 🤩😎 PARABÉNS!!!");
    } else {
      resultP.innerHTML = "YOU";
      resultB.innerHTML = " LOSE 🥺😕";
      resultB.style.color = "rgb(255, 0, 0)";
      alert("CPU venceu! 😭🥺 TENTE NOVAMENTE");
    }
    //Executa a função que reseta os pontos do user e do pc:
    resetPoints();
  }
}

//Reseta os pontos do user e do pc:
function resetPoints() {
  //Reseta a pontuação:
  userScore = 0;
  compScore = 0;
  //Exibe na div do html os pontos do usuário e do pc:
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
}
