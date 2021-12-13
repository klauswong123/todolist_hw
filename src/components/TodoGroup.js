import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoItem from "./TodoItem";

function TodoGroup(){
    
    const [todoList, setTodoList] = useState([]);
    function updateTodoList(newTodo){
        setTodoList(oldTodoList=>[...oldTodoList, newTodo])
    }

    return (
        <div>
            {todoList.map((item)=><TodoItem key={item} content={item}/>)}
            <TodoGenerator updateTodoList={updateTodoList}/>
        </div>
    );

}

export default TodoGroup;