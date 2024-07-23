import { useState, useEffect } from "react";
import axios from 'axios';
import "../DashAsssets/css/allrooms.css"


const AllRooms = () => {
  const [rooms, setRooms] = useState([]); 

  const DisplayAllRoom = () => {
    let url = "http://localhost:8000/dashboard/allrooms";
    axios.get(url).then((res) => {
      setRooms(res.data);
    }).catch((error) => {
      console.error("There was an error fetching the rooms!", error);
    });
  }

  useEffect(() => {
    DisplayAllRoom();
  }, []);

  return (
    <div className="main-div">
      <h1>All Rooms</h1>
      <table>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Location</th>
            <th>AC</th>
            <th>images</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.roomtype}</td>
              <td>{room.location}</td>
              <td>{room.ac}</td>
              <td className="image-td">{room.images.map((image,index)=>(
               <img className="imagesarray" key={index} src={image} alt={room.name}/>
              ))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRooms;
