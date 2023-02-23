"use strict";

const adicionar = document.getElementById("add");

const adicionarCard = (aluno, grade) => {
  const container = document.getElementById("container");
  const novaDiv = document.createElement("div");
  novaDiv.classList.add("aluno");
  novaDiv.innerHTML = `
                        <h2 class="aluno__title">${aluno}</h2>
                        <h2 id="grade">${grade}</h2>
                         `;

  let nota = grade;

  if (validarInput(nota)) {
    if (nota >= 5) {
      novaDiv.classList.add("azul");
    } else {
      novaDiv.classList.add("vermelho");
    }

    container.appendChild(novaDiv);
  }
};

const validarInput = (numero) => {
  if (numero == "" || isNaN(numero) || numero > 10 || numero < 0) {
    alert("Digite um número válido");
    return false;
  } else {
    return true;
  }
};

const handleClick = () => {
  const nomeAluno = prompt("Digite um nome para o card");
  const gradeAluno = prompt("Digite um numero para o card");

  adicionarCard(nomeAluno, gradeAluno);
};

adicionar.addEventListener("click", handleClick);
