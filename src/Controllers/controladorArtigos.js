const server = "http://10.147.208.7:3001/api/article/"


async function buscarArtigos(doenca, estado){
    if(estado != undefined && doenca != undefined){
        return buscarPorEstadoEDoenca(doenca, estado);
    }else if(doenca != undefined){
        return buscarArtigosPorDoenca(doenca);
    }else{
        throw new Error('A busca deve ser realizada com o nome de uma doença.');
    }
}

async function listarArtigos() {
    return fetch(server)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('Falhou a requisição.'); // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('Não encontrou qualquer resultado.');
            }

            // retorna uma promise com os dados em JSON
            return response.json();
        })
}

async function buscarArtigosPorDoenca(doenca){
    const requisicao = `?disease=${doenca}`;
    return fetch(server + requisicao)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('Falhou a requisição.') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('Não encontrou qualquer resultado.')
            }

            // retorna uma promise com os dados em JSON
            return response.json()
        })
}

async function buscarPorEstadoEDoenca(doenca, estado){
    const requisicao = `?state=${estado}&disease=${doenca}`;
    return fetch(server + requisicao)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('Falhou a requisição.') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('Não encontrou qualquer resultado.')
            }

            // retorna uma promise com os dados em JSON
            return response.json()
        })
}


export { buscarArtigos, listarArtigos};

