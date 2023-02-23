"use strict";

import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img/${produto.image}`

    const h5 = document.createElement('h5')
    h5.classList.add('card__title')
    h5.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const price = document.createElement('span')
    price.classList.add('card__price')
    price.innerText = `R$ ${produto.price}`
    price = price.toString().replace('.','.')

    card.append(img, h5, descricao, price)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()