import { ADDTODO, REMOVETODO, DONE, UNDONE,CHANGESTATUS } from "./constants";
const reducer = (state=[], action) =>{
    switch(action.type){
        case ADDTODO:
            return state.concat(action.payload);
        case REMOVETODO:
                return state.filter((item) => item.id !== action.payload)
        case CHANGESTATUS:
            return state.map((item) => {
                if (item.id === action.payload) {
                    if (item.status===DONE){
                        return Object.assign({}, item, {
                            status: UNDONE
                          })
                    }
                    if (item.status===UNDONE){
                        return Object.assign({}, item, {
                            status: DONE
                          })
                    }
                }
                return item
              })
        default:
            return state
    }
}

export default reducer