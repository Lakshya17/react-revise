import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowd, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const copyPassword = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed){
      string += '0123456789'
    }

    if(charAllowd){
      string += '!@#$%^&*'
    }

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }

    setPassword(pass)
  }, [length,numberAllowed, charAllowd, setPassword])

  const CopyToClipboard = () => {
    copyPassword.current?.select();
    copyPassword.current?.setSelectionRange(0, 7)
    console.log(copyPassword.current)
    const newPassword = password.slice(0, 7)
    window.navigator.clipboard.writeText(newPassword)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowd, setPassword, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-800'>
      <h1 className='text-center mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={copyPassword}
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={CopyToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div>
          <input type='checkbox' defaultChecked={charAllowd} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}} />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
