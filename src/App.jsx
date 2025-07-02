import { useState } from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/nav';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <BrowserRouter>
        <Routes>

          <Route path="/nav" element ={<Navbar/>}/>
  
          </Routes>
        </BrowserRouter>
</>
  )
}

export default App