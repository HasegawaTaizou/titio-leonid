"use strict";

const calcular = document.getElementById("calcular");

function somar() {
  const numero1 = Number(document.getElementById("nota1").value);
  const numero2 = Number(document.getElementById("nota2").value);
  const formulario = document.getElementById("form");
  const situacao = document.getElementById("situacao");

  situacao.value = (numero1 + numero2) / 2;

  if (situacao.value >= 5) {
    formulario.classList.add("verde");
    situacao.value = "APROVADO";
  } else {
    formulario.classList.add("vermelho");
    situacao.value = "REPROVADO";
  }
}

calcular.addEventListener("click", somar);
