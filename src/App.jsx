import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
// pk.eyJ1IjoiamlvdmFuaTEyMyIsImEiOiJjbHl5ZDZhbzcxY2s3Mm5zbG1taWZ1MDBjIn0.1nOWIuN47R6lsU1QXp40KQ
import Map from 'react-map-gl';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Landing/> */}
     <Home/>
    

    </>
  )
}

export default App
