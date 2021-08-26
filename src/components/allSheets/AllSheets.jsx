import React, { useState }  from 'react';
import TaskSheet from '../taskSheet/TaskSheet.jsx';

function AllSheets(props){
    let id = 0; //Could have done a better job here but I'll have to work with this because restriction of time
    const Sheets = props.createSheets;
    return(
        <div>{Sheets.map(item => {
            return <TaskSheet heading={item} key={id++} data={props.data}/>
        })}</div>
    )
}

export default AllSheets;