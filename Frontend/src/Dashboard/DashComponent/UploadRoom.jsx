import React, { useState } from "react";
import ".././DashAsssets/css/uploadroom.css";
import axios from "axios";

const UploadRoom = () => {
  const [roomDetails, setRoomDetails] = useState({
    roomtype: "",
    location: "",
    ac: "ac" // default value for the radio button
  });
  const [roomImages, setRoomImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({
      ...roomDetails,
      [name]: value
    });
  };

  const handleRoomImages = (e) => {
    setRoomImages(e.target.files);
  };

  const submitRoom = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in roomDetails) {
      formData.append(key, roomDetails[key]);
    }
    for (let i = 0; i < roomImages.length; i++) {
      formData.append('roomImages', roomImages[i]);
    }
    console.log(...formData);
    let url = "http://localhost:8000/dashboard/uploadroom";
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.error("There was an error uploading the room!", error);
    });
  };

  return (
    <div className="maindiv">
      <form onSubmit={submitRoom} encType="multipart/form-data">
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

        <label htmlFor="roomImages">Room Images</label>
        <input id="roomImages" type="file" multiple onChange={handleRoomImages} />

        <button type="submit" style={{ margin: "30px" }}>Submit</button>
      </form>
    </div>
  );
};

export default UploadRoom;
