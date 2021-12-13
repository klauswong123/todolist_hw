import '../styles/TodoItem.css'

function TodoItem(props){
    return(
        <div>
            <p>{props.content}</p>
        </div>
    );
}

export default TodoItem;