import React , { useState } from 'react'; 
import TaskSheet from './components/taskSheet/TaskSheet.jsx';
import AllSheets from './components/allSheets/AllSheets.jsx';

function App() {
  const [sheetName, setSheetName] = useState('');
  const [sheetItems, setSheetItems] = useState([]);

  const itemEvent = (event) => {
    setSheetName(event.target.value);
  };

  const addSheet = () => {
    setSheetItems(prevItems => {
      return [ sheetName ,...prevItems];
    })
  };
  
  return (
    <div className="App">
      <div className="taskDiv" id="taskDiv">
        {/* <TaskSheet /> */}
        <input type="text" value={sheetName} onChange={itemEvent} placeholder="Enter sheet name"/>
        <button onClick={addSheet}>Create Sheet</button>
      </div>
      <AllSheets createSheets={sheetItems} />
    </div>
  );
}

export default App;
