import React from 'react';
import './SubTask.css';

function SubTask(props){
    return(
        <li className="list-data">
            <input type="checkbox"/><label id={props.task}>{props.task}</label>
            <i className="delete-btn fas fa-trash-alt" htmlFor={props.task} onClick={props.handleDelete}></i>
        </li>
    )
}

export default SubTask;