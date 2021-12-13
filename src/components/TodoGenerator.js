import { useState } from "react";


function TodoGenerator(props){
    const [content, setContent] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(content);
        if (content.length>0){
            props.updateTodoList(content)
            setContent("")
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={content} onChange={e => setContent(e.target.value)}></input>
            <input type="submit" value="add" />
            </form>
        </div>
    )
}

export default TodoGenerator;