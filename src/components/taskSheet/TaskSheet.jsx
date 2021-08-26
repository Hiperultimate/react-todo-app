import React, { useState } from 'react';
import SubTask from '../subTask/SubTask.jsx';

function MenuSheet(props){
    let id = 0;     //Could have done a better job here but I'll have to work with this because restriction of time
    const [newItem, setNewItem] = useState('');
    const [sheetItems, setSheetItems] = useState([]);

    const itemEvent = (event) => {
        setNewItem(event.target.value);
    }

    const addToSheet = () => {
        setSheetItems(prevItems => {
            return [ ...prevItems,newItem ]
        } );
        setNewItem('');
    };

    return(
        <div className="menu-sheet">
            <div className="task-heading">{props.heading}</div>
            <input type="text" value={newItem} placeholder="Add" onChange={itemEvent}/>
            <button onClick={addToSheet}>Add subtasks</button>
            <div>

            <span>{newItem}</span>
                <ol>
                    {sheetItems.map((item)=> <SubTask task={item} key={id++}/> )}
                </ol>
            </div>
        </div>
    );
}

export default MenuSheet;