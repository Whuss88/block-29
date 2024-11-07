import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({setSelectedPlayer, selectedPlayer}) => {
  const [players, setPlayers] = useState([])
  const Navigate = useNavigate()
  useEffect(()=> {
    const fetchData = async () => {
      try {
      
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');
      const allPlayers = await response.json();
      const playersData = allPlayers.data.players;
      setPlayers(playersData) // brings back and array
      } catch (error) {
      console.error('Error fetching data:', error);

      }
    }; fetchData()
    
  }, [])
  
 
  
  
  return (
    <>
      <h1>Puppy bowl</h1>
    <section id='all-players'>
        {
          players.map((singlePlayer)=>{
            return (
              <section key={singlePlayer.id} onClick={()=>{
                  setSelectedPlayer(singlePlayer)
                  console.log(selectedPlayer)
                  Navigate('/details')
                  }}>
                <h2>{singlePlayer.name}</h2>
                
              </section>
            )
          })
        }
      </section>
      
      </>
  )

}

export default Home