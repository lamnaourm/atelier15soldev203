import uuid from "react-uuid"
import * as types from './ActionsType'


const initialState = {
    budget: 20000,
    depenses: [
        { id: uuid(), titre: 'Essence Voiture', montant: 3400 },
        { id: uuid(), titre: 'Vetement', montant: 700 },
        { id: uuid(), titre: 'Voyage', montant: 10000 },
    ]
}

const BudgetReducer = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case types.ADD_BUDGET:
            newState.budget += parseFloat(action.payload)
            break;
        case types.ADD_DEPENSE:
            newState.depenses = [...newState.depenses, action.payload]
            break;

    }
    return newState
}

export default BudgetReducer;