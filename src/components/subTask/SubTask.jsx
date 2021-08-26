import React from 'react';

function SubTask(props){
    return(
        <ul>
            <input type="checkbox"/>{props.task}
            <a href="#" onClick={props.handleDelete}>Delete</a>
        </ul>
    )
}

export default SubTask;