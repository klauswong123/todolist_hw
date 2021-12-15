import { useState } from "react";
import '../styles/TodoItem.css'
import { useDispatch } from "react-redux";
import { ADD_TODO, UNDONE } from "../redux/constants.js";
import {addTodoAPI} from "../apis/todos";
function TodoGenerator(){
    const dispatch = useDispatch();
    const [content, setContent] = useState("")
    const handleClick = () => {
        if (content.length>0){
            const data ={
                "content":content,
                "status":UNDONE
            }
            addTodoAPI(data).then( Response => dispatch({
                type: ADD_TODO,
                payload: {
                    content:Response.data.content,
                    id:Response.data.id,
                    status:UNDONE
                }
            })
            )
            setContent("")
        }
    }

    return(
        <div>
            <input className="webflow-style-input" type="text" value={content} onChange={event => setContent(event.target.value)} required></input>
            <input className="button-74" type="submit" value="add" onClick={handleClick}/>
        </div>
    )
}

export default TodoGenerator;