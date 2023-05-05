// services
import { getPilots } from "../../services/sw-api";

// npm packages
import { useState, useEffect } from "react";

const PilotList = (props) => {
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const fetchPilotList = async () => {
      const pilotData = await getPilots(props.pilotUrls).then(pilots => pilots)
      console.log('Pilot data', pilotData);
      setPilots(pilotData)
    }
    fetchPilotList()
  }, [])

  if(!pilots.length) return <h3>Getting Pilots...</h3>

  return ( 
    <div className="pilot-container">
      <h3>Pilot List</h3>
      <ul>
        {pilots.map(pilot => 
          <li key={pilot.name}>{pilot.name}</li>
        )}
      </ul>
    </div>
  );
}

export default PilotList;