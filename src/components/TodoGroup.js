import TodoGenerator from "./TodoGenerator";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAPI } from "../apis/todos";
import { INIT_TODO } from "../redux/constants";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoGroup(){
    const todo = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        getTodoAPI().then( Response => dispatch({
                type: INIT_TODO,
                payload: Response.data
            })
            )
    },[dispatch, todo.length])

    return (
        <div>
            {todo.map((item)=>
                <TodoItem key={uuidv4()} TODO={item}/>
            )}
            <TodoGenerator/>
        </div>
    );
}

export default TodoGroup;