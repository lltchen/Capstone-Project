const initState = {
    campaigns:{}
}

export const reducer = (state = initState,action) => {
   switch (action.type) {
        case "LOAD_CAMPAIGNS":
            return {...state, campaigns: action.payload}
    
        default:
            return state
    }






}

