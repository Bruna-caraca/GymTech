import { createStore } from 'redux'

const INITAL_STATE = {
    data: [
        { id: 1, usuario: "brunalima", senha: "12345", tipoAcesso: "professor" },
        { id: 2, usuario: "gymtech", senha: "tech123", tipoAcesso: "admin" },
        { id: 3, usuario: "aluno", senha: "aluno123", tipoAcesso: "aluno" }
    ]
}

function acessos(state = INITAL_STATE, action) {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(acessos)

export default store