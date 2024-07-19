import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10)

  let addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
    } else {
      reset()
    }
  }

  let decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      reset()
    }
  }

  function reset() {
    setCounter(counter * 0)
  }

  function Hello() {
    console.log("This actually works")
    return null;
  }

  function A() {
    console.log("Hello");
    return null
  }
  return (
    <>
      <h1> Counter App </h1>
      <h3> Counter: {counter}</h3>
      <button onClick={addValue}> Add </button>
      <button onClick={decrease}> -1 </button>
      <button onClick={reset}> Reset </button>
      <Hello />
      <A />
    </>
  )
}

export default App;