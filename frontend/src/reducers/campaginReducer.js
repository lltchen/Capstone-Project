const initState = {
    currentUser:{},
    selectedCampaign:{},
    campaigns:[]
}

export const reducer = (state = initState,action) => {
   switch (action.type) {
        case "CREATE_USER":
            return {...state, currentUser: action.payload}
        case "LOGIN_USER":
            return {...state, user: action.payload}
        case "GET_CAMPAIGNS":
            return {...state, campaigns: action.payload}
        case "SELECTED_CAMPAIGN":
            return {...state, selectedCampaign: action.payload}

        default:
            return state
    }






}
