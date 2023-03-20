"use strict";

const mapa = document.querySelector("#map");

const getEstado = ({ target }) => {
  const estado = target.id.replace("BR-", "");
  console.log(estado);

  // const nomeEstado = target.getAttribute('title')
  const listarCidades = async (estado) => {
    const url = `http://localhost:8080/cidades/${estado}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      uf: data.uf,
      nome: data.descricao,
      cidades: data.cidades,
    };
  };
  listarCidades(estado).then((item) => {
    console.log(item);
  });

  const preencherDados = async () => {
    const dadosCidades = await listarCidades(estado);
    document.querySelector(".card__sigla").textContent = dadosCidades.uf;
    document.querySelector(".card__title").textContent = dadosCidades.nome;
    document.querySelector(".cidade").textContent = dadosCidades.cidades;
  };

  preencherDados();
};

mapa.addEventListener("click", getEstado);
