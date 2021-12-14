import '../styles/TodoItem.css'
import { useDispatch } from "react-redux";
import { REMOVETODO, DONE, CHANGESTATUS } from "../redux/constants.js";

function TodoItem(props){
    const dispatch = useDispatch();
    function removeTodo(){
        dispatch({
            type: REMOVETODO,
            payload: props.TODO.id,
        })
    }

    function changeStatus(){
        dispatch({
            type: CHANGESTATUS,
            payload: props.TODO.id,
        })

    }
    return(
        <div>
            <p className={
                props.TODO.status===DONE?"deleteLine":""
            } onClick={changeStatus}>  
                {props.TODO.content} 
                <input className="button" type="submit" value="delete" onClick={removeTodo}/>
            </p>
            
        </div>
    );
}

export default TodoItem;