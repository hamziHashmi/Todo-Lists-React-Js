import React from "react";
import './index.css';
import CancelIcon from '@material-ui/icons/Cancel';
const TodoLists=(props)=>{
    const deleteitems=()=>{
    alert('deleted');
    }
    return(<>
    <div className="Todo_style" >
    <CancelIcon onClick={()=>{
        props.onSelect(props.id);
    }}


    /><li>{props.text}</li>
    </div>
    </>);
}
export default TodoLists;