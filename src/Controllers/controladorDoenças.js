
const server = "http://192.168.1.14:3001/api/disease/"

async function listarDoencas(){
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

async function buscarDoencasPorEstado(estado) {
    const requisicao = `?states=${estado}`;
    return fetch(server+requisicao)
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

export{buscarDoencasPorEstado, listarDoencas};