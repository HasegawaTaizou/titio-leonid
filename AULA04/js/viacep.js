'use strict'

export const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    
    const response = await fetch(url)
    const data = await response.json()
    
    return {
        estado: data.uf,
        bairro: data.bairro,
        cidade: data.localidade,
        logradouro: data.logradouro,
        // numero: data.
    }
}
