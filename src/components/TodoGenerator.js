import { useState } from "react";
import '../styles/TodoItem.css'
import { useDispatch } from "react-redux";
import { ADDTODO } from "../redux/constants.js";

function TodoGenerator(){
    const dispatch = useDispatch();
    const [content, setContent] = useState("")
    const handleClick = () => {
        if (content.length>0){
            dispatch({
                type: ADDTODO,
                content: content
            })
            setContent("")
        }
    }

    return(
        <div>
            <input type="text" value={content} onChange={e => setContent(e.target.value)} required></input>
            <input className="button-74" type="submit" value="add" onClick={handleClick}/>
        </div>
    )
}

export default TodoGenerator;