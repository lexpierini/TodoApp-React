const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DESCRIPTION_CHANGED":
            return { ...state, description: action.payload };
        default:
            return state;
    }
}