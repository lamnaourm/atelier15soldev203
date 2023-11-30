import uuid from 'react-uuid'
import * as types from './ActionsType'


export const addbudget = (montant) => {
    return {
        type:types.ADD_BUDGET,
        payload: montant
    }
}


export const adddepense = (titre, montant) => {
    return {
        type:types.ADD_DEPENSE,
        payload: {id:uuid(), titre, montant:parseFloat(montant)}
    }
}