import api from "./api";


export const addTodoAPI =(data)=>{
    return api.post("/todoitem", data)
} 
export const removeTodoAPI=(id)=>{
    return api.delete("/todoitem/"+id)
}
export const getTodoAPI=()=>{
    return api.get("/todoitem")
}
export const toggleStatusAPI=(id,data)=>{
    return api.put("/todoitem/"+id, data)
}
