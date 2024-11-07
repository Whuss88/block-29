import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




const Details = ({selectedPlayer}) => {
  const navigate = useNavigate()
  // useEffect( ()=> {
    console.log(selectedPlayer)
    
    return (
      <>
       <section  id='player-details'> 
         <h2>Details for {selectedPlayer.name}</h2>
         <p>ID {selectedPlayer.id}</p>
         <img src={selectedPlayer.imageUrl}
         height={600}
         width={600}/>
         <p>Breed: {selectedPlayer.breed}</p>
         <p>Status: {selectedPlayer.status}</p>
            
        </section> 
      
      <button onClick={()=>navigate('/home')}>Home</button>
      </>
    )
  
  
}
export default Details