export const addTodo=(state, action)=>{
    return state.concat(action.content)
}