import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        description: "Lire un livre de français",
        list: [{
            _id: 1,
            description: "Payer la facture de la carte de crédit",
            done: true,
        }, {
            _id: 2,
            description: "Rendez-vous avec l'équipe à 10h",
            done: false,
        }, {
            _id: 3,
            description: "Rendez-vous médical le mardi après le déjeuner",
            done: false,
        }]
    })
})

export default rootReducer;