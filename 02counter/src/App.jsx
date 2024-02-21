import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 0;  

  // Hooks 
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter = counter + 1;

    if(counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} >Add Value {counter}</button>
      <br />  
      <br />  
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />  
      <br /> 
      <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
