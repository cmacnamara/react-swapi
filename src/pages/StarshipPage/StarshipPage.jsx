// npm packages
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// services
import { getStarship } from "../../services/sw-api";

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if(!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return ( 
    <main className="starship-detail-page">
      <div className="starship-info-card">
        <table>
          <tr>
            <td>NAME:</td>
            <td>{starshipDetails.name}</td>
          </tr>
          <tr>
            <td>MODEL:</td>
            <td>{starshipDetails.model}</td>
          </tr>
        </table>
      </div>
    </main>
  );
}

export default StarshipPage;