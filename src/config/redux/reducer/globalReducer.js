const initialState = {
    name: "dicky"
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'rizhaldi'
        }
    }
    return state;
}

export default globalReducer;