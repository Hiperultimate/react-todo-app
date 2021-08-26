import React, { useState } from 'react';
import SubTask from '../subTask/SubTask.jsx';
import './TaskSheet.css';

function MenuSheet(props){
    let id = 0;     //Could have done a better job here but I'll have to work with this because restriction of time
    let itemData = props.data[props.heading];
    if(typeof itemData === 'undefined'){
        itemData = [];
    }
    
    const [newItem, setNewItem] = useState('');
    const [sheetItems, setSheetItems] = useState([...itemData]);
    
    const itemEvent = (event) => {
        setNewItem(event.target.value);
    }
    
    const addToSheet = () => {
        setSheetItems(prevItems => {
            return [ ...prevItems,newItem ]
        } );
        setNewItem('');
    };
    
    const deleteSubtask = (toDelete) => {
        let newSheetItem = sheetItems.filter(item => {
            if(item !== toDelete ){
                return item;
            };
        });
        setSheetItems(newSheetItem);
    }

    return(
        <div className="menu-sheet">
            <div className="task-heading">{props.heading}</div>
            <div className="sub-task">
                <ul>
                    {sheetItems.map((item)=> <SubTask task={item} key={id++} handleDelete={()=>deleteSubtask(item)}/> )}
                </ul>
            </div>
            <div className="add-task-section">
                <input type="text" value={newItem} placeholder="Add" onChange={itemEvent}/>
                <button onClick={addToSheet}>Add Tasks</button>
            </div>
        </div>
    );
}

export default MenuSheet;