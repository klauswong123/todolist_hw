import { useState } from "react";
import '../styles/TodoItem.css'
import { useDispatch } from "react-redux";
import { ADDTODO, UNDONE } from "../redux/constants.js";
import _uniqueId from 'lodash/uniqueId';

function TodoGenerator(){
    const dispatch = useDispatch();
    const [content, setContent] = useState("")
    const handleClick = () => {
        if (content.length>0){
            dispatch({
                type: ADDTODO,
                payload: {
                    content:content,
                    id:_uniqueId('todo-list-'),
                    status:UNDONE
                }
            })
            setContent("")
        }
    }

    return(
        <div>
            <input className="webflow-style-input" type="text" value={content} onChange={e => setContent(e.target.value)} required></input>&nbsp;&nbsp;&nbsp;
            <input className="button-74" type="submit" value="add" onClick={handleClick}/>
        </div>
    )
}

export default TodoGenerator;