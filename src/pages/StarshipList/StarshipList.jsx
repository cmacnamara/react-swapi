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
    console.log(starshipList);
  }, [])

  if(!starshipList.length) return <h1>Loading Starships...</h1>

  return (  
    <>
    </>
  );
}

export default StarshipList;