'use strict'

async function getFilmes() {
    const url="http://localhost8080/v1/controle-filmes/filme"
    const response=await fetch(url)
    const data=await response.json()
    return data
}

async function postFilmes(filme) {
    const url="http://localhost8080/v1/controle-filmes/filme"
    const options={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response=await fetch(url, options)
    return response.ok
}

async function putFilmes(filme, id) {
    const url=`http://localhost8080/v1/controle-filmes/filme/${id}`
    const options={
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response=await fetch(url, options)
    return response.ok
}

async function deleteFilme(id) {
    const url=`http://localhost8080/v1/controle-filmes/filme/${id}`
    const options={
        method: 'DELETE'
    }
    const response=await fetch(url, options)
    return response.ok
}

const filmesTeste={
    "nome": "A culpa é das estrelas",
    "duracao": "2:20",
    "sinopse": "Hazel Grace Lancaster e Augustus Waters são dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer. Por causa da doença, Hazel sempre descartou a ideia de se envolver amorosamente, mas acaba cedendo ao se apaixonar por Augustus. Juntos, eles viajam para Amsterdã, onde embarcam em uma jornada inesquecível.",
    "data_lancamento": "2014-06-05"
}
