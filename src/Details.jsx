import { useNavigate } from "react-router-dom"

const Details = ({selectedPlayer}) => {
  const navigate = useNavigate()
  
    // console.log(selectedPlayer)
    
    return (
      <>
       <section  id='player-details'> 
         <h2>Details for {selectedPlayer.name}</h2>
         <p>ID: {selectedPlayer.id}</p>
         <img src={selectedPlayer.imageUrl}/>
         <p>Breed: {selectedPlayer.breed}</p>
         <p>Status: {selectedPlayer.status}</p>
            
        </section> 
      
      <button onClick={()=>navigate('/home')}>Home</button>
      </>
    )
  
  
}
export default Details