import React from 'react';
import './SubTask.css';

function SubTask(props){
    return(
        <li>
            <input type="checkbox"/><label id={props.task}>{props.task}</label>
            <a href="#" htmlFor={props.task} onClick={props.handleDelete}>Delete</a>
        </li>
    )
}

export default SubTask;