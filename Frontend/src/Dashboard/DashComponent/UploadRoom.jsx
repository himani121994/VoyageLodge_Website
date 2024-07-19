import React, { useState } from "react";
import ".././DashAsssets/css/uploadroom.css"

const UploadRoom = () => {
  const [roomDetails, setRoomDetails] = useState({
    roomtype: "",
    location: "",
    ac: "ac" // default value for the radio button
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({
      ...roomDetails,
      [name]: value
    });
  };

  return (
    <div className="maindiv">
      <form>
        <label htmlFor="roomtype">Room Type</label>
        <input type="text" name="roomtype" onChange={handleInputChange} />

        <label htmlFor="location">Location</label>
        <input type="text" name="location" onChange={handleInputChange} />

        <label>AC</label>
        <input 
          type="radio" 
          name="ac" 
          value="ac" 
          checked={roomDetails.ac === "ac"} 
          onChange={handleInputChange} 
        /> 
        AC
        <input 
          type="radio" 
          name="ac" 
          value="non-ac" 
          checked={roomDetails.ac === "non-ac"} 
          onChange={handleInputChange} 
        /> 
        Non-AC

        <button>submit</button>
      </form>
    </div>
  );
};

export default UploadRoom;
