import TodoGenerator from "./TodoGenerator";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup(){
    const todo = useSelector((state) => state);
    return (
        <div>
            {todo.map((item,index)=><TodoItem key={index} content={item}/>)}
            <TodoGenerator/>
        </div>
    );

}

export default TodoGroup;