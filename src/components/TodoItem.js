import '../styles/TodoItem.css'
import '../styles/updateItem.css'
import { useDispatch } from "react-redux";
import { REMOVE_TODO, DONE, CHANGE_STATUS, UNDONE, UPDATE_TODO } from "../redux/constants.js";
import {removeTodoAPI, toggleStatusAPI} from "../apis/todos";
import { useEffect, useState } from 'react';
import { Modal, Button, Input } from 'antd';


function TodoItem(props){
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState("")

    useEffect(()=>{
        setContent(props.TODO.content);
    },[])

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
        .then(  Response =>
            dispatch({
                type: CHANGE_STATUS,
                payload: {
                    id: Response.data.id,
                    status: Response.data.status
                }
            })
        )
    }

    function updateTodo(){
        const data ={
            content: ''+content.toString()
        }
        toggleStatusAPI(props.TODO.id, data)
        .then( Response=>{
            dispatch({
                type: UPDATE_TODO,
                payload: {
                    id: Response.data.id,
                    content: Response.data.content
                }
            })
        }
        ).then(setVisible(false))
    }

    function turnVisible(){
        setVisible(true)
    }

    return(
        <div className='todoItem'>
            <Modal
                title="Modal"
                visible={visible}
                onOk={()=>updateTodo()}
                onCancel={()=>setVisible(false)}
                okText="Update"
                cancelText="Cancel"
                >
                <Input.TextArea placeholder={props.TODO.content} className="updateinput" value={content} onChange={event => setContent(event.target.value)} ></Input.TextArea>
            </Modal>
            <span className={
                props.TODO.status===DONE?"deleteLine":""
            } onClick={()=>ToggleStatus(props.TODO.status)}>  
                {props.TODO.content} 
                
            </span>
            <input className="deleteButton" type="button" value="delete" onClick={event=>removeTodo(event)}/>
            <input className="updateButton" type="button" value="update" onClick={()=>setVisible(true)} />  
        </div>
    );
}

export default TodoItem;