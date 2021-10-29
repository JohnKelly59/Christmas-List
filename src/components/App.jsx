import React, {useState} from "react";

function App() {

  const[list, setList] = useState("");
  const [items, setItems] = useState([]);


  function handleChange(event){
    const newValue = event.target.value
    setList(newValue);
  }
    
    function handleClick(){
    setItems((prevItems) => {
      return [...prevItems, list]
    
    })
    setList("")
    }
    


  return (
    <div className="container">
      <div className="heading">
        <h1>Christmas List</h1>
      </div>
      <div className="form">
        <input
        value={list} 
        name="box" onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
