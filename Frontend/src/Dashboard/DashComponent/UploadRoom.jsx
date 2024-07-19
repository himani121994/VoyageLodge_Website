import React, { useState } from "react";
import ".././DashAsssets/css/uploadroom.css"
import axios from "axios";

const UploadRoom = (e) => {
  const [roomDetails, setRoomDetails] = useState({
    roomtype: "",
    location: "",
    ac: "ac" // default value for the radio button
  });
  const [roomimages,setRoomimages] = useState([]);
  
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({
      ...roomDetails,
      [name]: value
    });
  };

  const roomImages = ()=>{
    setRoomimages(e.target.files);
  }



  const submitRoom = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    for (let key in roomDetails) {
      formData.append(key, roomDetails[key]);
  }
    for (let i = 0; i<roomimages.length; i++ ) {
      formData.append('roomImages',roomimages[i])
    }

    let url = "http://localhost:8000/dashboard/uploadroom";
    axios.post(url, formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>{
      console.log(res.data);
    })
  }

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
        <label htmlFor="">Room Images</label>
        <input id="images" type="file" multiple onChange={roomImages} />
      </form>

      <button onClick={submitRoom} style={{margin:"30px"}}>submit</button>
    </div>
  );
};

export default UploadRoom;
