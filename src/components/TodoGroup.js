import TodoGenerator from "./TodoGenerator";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAPI } from "../apis/todos";
import { INIT_TODO, PageSize } from "../redux/constants";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/page.css'
function TodoGroup(){
    const todo = useSelector((state) => state);
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(0)
    const dispatch = useDispatch();
    useEffect(()=>{
        getTodoAPI().then( Response => {
            setPageSize(parseInt(Response.data.length/(PageSize+1))+1)
            dispatch({
                type: INIT_TODO,
                payload: Response.data.slice((page-1)*PageSize,page*PageSize)
            })
        })
    },[dispatch, todo.length, page])
    function PreviousPage(){
        if (page>1){
            setPage(page-1)
        }
        else{
            window.alert("Already in Frst Page")
        }
    }

    function NextPage(){
        if (page<pageSize){
            setPage(page+1)
        }
        else{
            window.alert("Already in Last Page")
        }
    }

    return (
        <div>
            {todo.map((item)=>
                <TodoItem page={page} setPage={setPage} key={uuidv4()} TODO={item}/>
            )}
            <TodoGenerator/>
            <input className={ page>1?"next round":"round" } type="button" value="<" onClick={()=> PreviousPage()} />
            <span className={ "pageNumber" }>{page}/{pageSize}</span>
            <input className={ page<pageSize?"next round":"round" } type="button" value=">" onClick={()=> NextPage()} />
        </div>
    );
}

export default TodoGroup;