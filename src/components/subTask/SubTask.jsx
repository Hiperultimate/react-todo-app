import React from 'react';

function SubTask(props){
    return(
        <ul><input type="checkbox"/>{props.task}</ul>
    )
}

export default SubTask;