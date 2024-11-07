import { useState } from 'react'
import Home from './Home'
import Details from './Details'
import {Routes, Route} from 'react-router-dom'

const App = () => {
const [selectedPlayer, setSelectedPlayer] = useState({})

  // make a function for clickable player list

  // details component for each player showing all details
  // back button
  
// console.log(players)

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
