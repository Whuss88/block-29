import { useEffect } from "react";


const Home = ({setPlayers, players}) => {
  
  useEffect(()=> {
    const fetchData = async () => {
      try {
      // Fetch data from the specified URL
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');
      // Make the data readable with json()
      const allPlayers = await response.json();
      // console.log(allPlayers) //brings back object
      const playersData = allPlayers.data.players;
      setPlayers(playersData) // brings back and array
      console.log(players)
      // if all that doesnt work show error
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
              <section key={singlePlayer.id}>
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