import { useCallback, useState } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8) //length of the password
  const [numberAllowed, setnumberAllowed] = useState(false) //setting numbers
  const [characters, setCharacters] = useState(false) //setting characters
  const [password, setpassword] = useState("")

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //passing value in string

    if(numberAllowed) str += "0123456789" //if numberAllowed is true, append str
    if(characters) str += "+@#$"

    for (i = 1; i<= length; i++) {
      let char = Map.floor(Map.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setpassword(pass)

  }, [length, numberAllowed, characters, setpassword]) 


   return (
    <>
      <div>
        <div>Test</div>
        <input type="text"  placeholder='password' readOnly />
        <button className='buttoncopy'>Copy</button>
      </div>

      <div>
        <div> <input type='range' min={6} max={32} onChange={(e) => {setLength(e.target.value)}}></input> 
          <label> Length: {length} </label>
        </div>

        <div className='.numbers'>
          <input type='checkbox' defaultChecked={numberAllowed} id="numbers"onChange={() => {setnumberAllowed((prev) => !prev)}}/>
          <label htmlFor='numbers'> Numbers </label>
        </div>

        <div>
          <input type='checkbox' defaultChecked={characters} id='characters' onChange={() => {setCharacters((prevChar) => !prevChar)}}/>
          <label htmlFor='characters'> Characters </label>
        </div>
      </div>

    </>
  )
}

export default App
