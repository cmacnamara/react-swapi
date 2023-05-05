// npm packages
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// services
import { getAllStarships } from "../../services/sw-api";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData)
    }
    fetchStarshipList()
    console.log(starshipList, 'Starships');
  }, [])

  if(!starshipList.results?.length) return <h1>Loading Starships...</h1>

  return (  
    <main>
      {starshipList.results.map((starship, idx) => 
        <div className="link-container" key={idx}>
          <Link to={`/${starship.url.slice(-2)}`}>{starship.name}</Link>
        </div>
      )}
    </main>
  );
}

export default StarshipList;