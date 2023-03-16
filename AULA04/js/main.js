'use strict'

// import {cep} from "./cep.js"
// import {pesquisarCep} from "./viacep.js"
import {pesquisarCep} from "./postmon.js"


console.log(pesquisarCep('06423255'));


const preencherFormulario = async () => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCep(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    // document.getElementById('numero').value = cep.numero
    document.getElementById('cidade').value = cep.cidade
    document.getElementById('estado').value = cep.estado
    
}

document.getElementById('cep').addEventListener('blur', preencherFormulario)
