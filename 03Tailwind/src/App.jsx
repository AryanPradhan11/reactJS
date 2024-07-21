import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './cards'

function App() {
  let obj = {
    name: 'Aryan'
  }

  let arr = [1, 2, 3]
  return (
    <>
      <h1 className='text-black bg-green-400 rounded-xl p-4'>TailWind CSS</h1>
      <Cart username="Aryan"/>
    </>
  )
}

export default App
