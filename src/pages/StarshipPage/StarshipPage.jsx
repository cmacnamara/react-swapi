// npm packages
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// services
import { getStarship } from "../../services/sw-api";

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const { starshipId } = useParams()
  const tableHeight = 40;

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
            <td height={`${tableHeight}px`}><div className="table-data">NAME:</div></td>
            <td height={`${tableHeight}px`}><div className="table-data">{starshipDetails.name}</div></td>
          </tr>
          <tr>
            <td height={`${tableHeight}px`}><div className="table-data">MODEL:</div></td>
            <td height={`${tableHeight}px`}><div className="table-data">{starshipDetails.model}</div></td>
          </tr>
          <tr>
            <td><Link to={'/'}>RETURN</Link></td>
          </tr>
        </table>
      </div>
    </main>
  );
}

export default StarshipPage;