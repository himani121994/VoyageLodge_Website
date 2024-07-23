import { useState, useEffect } from "react";
import axios from 'axios';
import "../DashAsssets/css/allrooms.css";

const AllVehicle = () => {
  const [vehicles, setVehicles] = useState([]); 

  const DisplayAllVehicle = () => {
    let url = "http://localhost:8000/dashboard/allvehicle";
    axios.get(url).then((res) => {
      setVehicles(res.data);
    }).catch((error) => {
      console.error("There was an error fetching the vehicles!", error);
    });
  };

  const deletebtn = (id) => {
    let url = "http://localhost:8000/dashboard/deletevehicle";
    axios.post(url, { id: id }).then((res) => {
      setVehicles((prevVehicles) => prevVehicles.filter(vehicle => vehicle._id !== id));
    }).catch((error) => {
      console.error("There was an error deleting the vehicle!", error);
    });
  };

  useEffect(() => {
    DisplayAllVehicle();
  }, []);

  return (
    <div className="main-div">
      <h1>All Vehicle</h1>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Brand</th>
            <th>Vehicle Type</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(vehicles) && vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.price}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.vehicletype}</td>
              <td className="image-td">
                {vehicle.images.map((image, index) => (
                  <img className="imagesarray" key={index} src={image} alt={vehicle.name} />
                ))}
              </td>
              <td>
                <button onClick={() => deletebtn(vehicle._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVehicle;
