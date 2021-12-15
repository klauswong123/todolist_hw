import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { DONE } from "../redux/constants.js";

function UndoneStuff(){
    const todo = useSelector((state) => state);
    return (
        <div>
            <h2>Undone Todo Items</h2>
            {todo.filter(item=> item.status!==DONE).map((item)=>
                <TodoItem key={item.id} TODO={item}/>
            )}
        </div>
    );
}

export default UndoneStuff;