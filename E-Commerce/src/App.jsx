import { useState } from 'react';
import './LoginForm.css';
import  navbar  from './navbar';


function App() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    navbar()
  )
  
}



export default App
