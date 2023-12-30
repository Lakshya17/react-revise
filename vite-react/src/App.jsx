import { useState } from 'react';
import Test from './components/test'
import './App.css'

function App() {
  let [increment, setIncrement] = useState(0);
  let [decrement, setDecrement] = useState();
  let counter = 5;

  const incrementFunction = () => {
    setIncrement(() => increment+1 )
    console.log('working', increment, setIncrement)
  }

  const decrementFunction = () => {
    // setDecrement()
    console.log('Working 2')
  }

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementFunction}>Add Value</button>
      <button onClick={decrementFunction}>Remove Value</button>
    </>
  )
}

export default App
