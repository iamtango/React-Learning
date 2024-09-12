import { useState } from 'react';
import './App.css';
import WorkTile from './Components/WorkTile/WorkTile';

function App() {

  const [title, setTitle] = useState(null)
  const [workList, setWorkList] = useState([])

  const handleSave = () => {
    console.log('called')
    setWorkList((prev) => [...workList, title])
    setTitle('')
  }

  console.log('workList', workList)

  const handleInputChange = (e) => {
    setTitle((prev) => e.target.value)
  }

  return (
    <div className="App">
      <input type='text' value = {title} onChange={(e) => handleInputChange(e)} />
      <input type='submit' text = 'Submit' onClick={handleSave} />
      {workList.map((item) => {
        return(
          <WorkTile title = {item} workList = {workList} setWorkList = {setWorkList} />
        )
      })
      }
    </div>
  );
}

export default App;
