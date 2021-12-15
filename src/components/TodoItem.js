import '../styles/TodoItem.css'
import { useDispatch } from "react-redux";
import { REMOVE_TODO, DONE, CHANGE_STATUS, UNDONE } from "../redux/constants.js";
import {removeTodoAPI, toggleStatusAPI} from "../apis/todos";

function TodoItem(props){
    const dispatch = useDispatch();
    function removeTodo(event){
        event.stopPropagation();
        removeTodoAPI(props.TODO.id)
        .then( dispatch({
            type: REMOVE_TODO,
            payload: props.TODO.id,
        })
        )
    }

    function ToggleStatus(TodoStatus){
        const data ={
            status: TodoStatus!==DONE?DONE:UNDONE
        }
        toggleStatusAPI(props.TODO.id, data)
        .then(
            dispatch({
                type: CHANGE_STATUS,
                payload: {
                    id: props.TODO.id,
                    status: data.status
                }
            })
        )


    }
    return(
        <div>
            <p className={
                props.TODO.status===DONE?"deleteLine":""
            } onClick={()=>ToggleStatus(props.TODO.status)}>  
                {props.TODO.content} 
                <input className="button" type="submit" value="delete" onClick={event=>removeTodo(event)}/>
            </p>
            
        </div>
    );
}

export default TodoItem;