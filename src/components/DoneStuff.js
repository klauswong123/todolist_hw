import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { DONE } from "../redux/constants.js";
import { useEffect } from "react";

function DoneStuff(){
    const todo = useSelector((state) => state);
    useEffect(()=>{
        console.log(todo.filter(item=> item.status===DONE))
    })

    return (
        <div>
            <h2>Done Todo Items</h2>
            {todo.filter(item=> item.status===DONE).map((item)=>
                <TodoItem key={item.id} TODO={item}/>
            )}
        </div>
    );
}

export default DoneStuff;