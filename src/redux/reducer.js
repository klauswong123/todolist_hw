import { ADDTODO } from "./constants";
const reducer = (state=[], action) =>{
    switch(action.type){
        case ADDTODO:
            return state.concat(action.content);
        default:
            return state
    }
}

export default reducer