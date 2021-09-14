const initialState = {
    userData: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}

export default authReducer