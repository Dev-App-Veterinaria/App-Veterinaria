const server = "http://10.147.208.7:3001/api/article/"

async function listarArtigos() {
    return fetch(server)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('falhou a requisição') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('não encontrou qualquer resultado')
            }

            // retorna uma promise com os dados em JSON
            return response.json()
        })
}

async function buscarArtigosPorEstado(estado) {
    const requisicao = `?state=${estado}`;
    return fetch(server + requisicao)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('falhou a requisição') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('não encontrou qualquer resultado')
            }

            // retorna uma promise com os dados em JSON
            return response.json()
        })
}

export {buscarArtigosPorEstado, listarArtigos};

