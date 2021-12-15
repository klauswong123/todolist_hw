import { ADD_TODO, REMOVE_TODO,CHANGE_STATUS, INIT_TODO, UPDATE_TODO } from "./constants";
const reducer = (state=[], action) =>{
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.payload);
        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.payload)
        case INIT_TODO:
            return action.payload;
        case CHANGE_STATUS:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {
                        status: action.payload.status
                        })
                }
                return item
              })
        case UPDATE_TODO:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {
                        content: action.payload.content
                        })
                }
                return item
                })
        default:
            return state
    }
}

export default reducer