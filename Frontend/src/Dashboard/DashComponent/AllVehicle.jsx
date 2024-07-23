import { useState, useEffect } from "react";
import axios from 'axios';
import "../DashAsssets/css/allrooms.css"


const AllVehicle = () => {
  const [vehicles, setVehicles] = useState([]); 

  const DisplayAllVehicle = () => {
    let url = "http://localhost:8000/dashboard/allvehicle";
    axios.get(url).then((res) => {
        setVehicles(res.data);
    }).catch((error) => {
      console.error("There was an error fetching the rooms!", error);
    });
  }

  useEffect(() => {
    DisplayAllVehicle();
  }, []);

  return (
    <div className="main-div">
      <h1>All Vehicle</h1>
      <table>
        <thead>
          <tr>
            <th>setVehicles</th>
            <th>brand</th>
            <th>vehicletype</th>
            <th>images</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.price}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.ac}</td>
              <td className="image-td">{vehicle.images.map((image,index)=>(
               <img className="imagesarray" key={index} src={image} alt={vehicle.name}/>
              ))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVehicle;
