import { useState } from 'react'
import Home from './Home'
import Details from './Details'
import {Routes, Route} from 'react-router-dom'

const App = () => {
const [selectedPlayer, setSelectedPlayer] = useState({})


  return (
    <>
      <Routes>
        <Route path='/home' element={<Home setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}/>} />
      
        <Route path='/details' element={<Details selectedPlayer={selectedPlayer}/>}/> 
      </Routes>
    </>
  )
}
export default App
