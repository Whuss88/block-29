import { useState } from 'react'
import Home from './Home'

const App = () => {
  const [players, setPlayers] = useState([])

  
  


  return (
    <>
      <Home setPlayers={setPlayers} players={players}/>
      
      
      
    </>
  )
}

export default App
