import TodoGenerator from "./TodoGenerator";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup(){
    const todo = useSelector((state) => state);


    return (
        <div>
            {todo.map((item,index)=>
                <div>
                    <TodoItem key={index} TODO={item}/>
                </div>
            )}
            <TodoGenerator/>
        </div>
    );

}

export default TodoGroup;