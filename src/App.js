import React , { useState } from 'react'; 
import AllSheets from './components/allSheets/AllSheets.jsx';
import taskData from './Data.js';
import './App.css';

function App() {
  let headings = Object.keys(taskData)
  const [sheetName, setSheetName] = useState('');
  const [sheetItems, setSheetItems] = useState([...headings]);

  const itemEvent = (event) => {
    setSheetName(event.target.value);
  };

  const addSheet = () => {
    setSheetItems(prevItems => {
      return [ ...prevItems,sheetName ];
    })
    setSheetName('');
  };
  
  return (
    <div className="App">
      <div className="sheet-input-container">
        <div className="taskDiv" id="taskDiv">
          <input type="text" value={sheetName} onChange={itemEvent} placeholder="Enter Sheet Name"/>
          <button onClick={addSheet}>Create Sheet</button>
        </div>
      </div>
      <AllSheets createSheets={sheetItems} data={taskData}/>
    </div>
  );
}

export default App;
