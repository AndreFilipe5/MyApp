import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[counter,setcounter]=useState(0)
  function handleClickPlus(){
    setcounter(counter+1)
  }
  function handleClickMinus(){
    setcounter(counter-1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <hi>Contador</hi>
        <p>counter: {counter}</p>
        {/* <p>setcounter: {setcounter}</p> */}
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
      </header>
    </div>
  );
}

export default App;
