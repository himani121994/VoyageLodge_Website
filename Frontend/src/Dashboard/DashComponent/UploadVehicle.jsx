import React, { useState } from "react";
import ".././DashAsssets/css/uploadroom.css";
import axios from "axios";

const UploadVehicle = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    price: "",
    brand: "", 
    vehicletype: "mini" // corrected name to vehicletype
  });
  const [vehicleImages, setVehicleImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value
    });
  };

  const handleVehicleImages = (e) => {
    setVehicleImages(e.target.files);
  };

  const submitVehicle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in vehicleDetails) {
      formData.append(key, vehicleDetails[key]);
    }
    for (let i = 0; i < vehicleImages.length; i++) {
      formData.append('vehicleImages', vehicleImages[i]);
    }
    console.log(...formData);
    let url = "http://localhost:8000/dashboard/uploadvehicle";
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.error("There was an error uploading the vehicle!", error);
    });
  };

  return (
    <div className="maindiv">
      <form onSubmit={submitVehicle} encType="multipart/form-data">
        <label htmlFor="price">Price</label>
        <input type="text" name="price" onChange={handleInputChange} />

        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" onChange={handleInputChange} />

        <label>Vehicle Type</label>
        <input
          type="radio"
          name="vehicletype" // corrected name to vehicletype
          value="mini"
          checked={vehicleDetails.vehicletype === "mini"}
          onChange={handleInputChange}
        />
        Mini
        <input
          type="radio"
          name="vehicletype" // corrected name to vehicletype
          value="prime-sedan"
          checked={vehicleDetails.vehicletype === "prime-sedan"}
          onChange={handleInputChange}
        />
        Prime-Sedan

        <label htmlFor="vehicleImages">Vehicle Images</label>
        <input id="vehicleImages" type="file" multiple onChange={handleVehicleImages} />

        <button type="submit" style={{ margin: "30px" }}>Submit</button>
      </form>
    </div>
  );
};

export default UploadVehicle;
