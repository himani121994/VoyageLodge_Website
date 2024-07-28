import { useState } from "react";
import axios from "axios";
import "../DashAsssets/css/carousels.css";

const DashCarousels = () => {
  const [sliderinput, setSliderinput] = useState({
    hadding: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSliderinput({
      ...sliderinput,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSliderinput({
      ...sliderinput,
      image: file
    });
  };

  const sliderSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/dashboard/carousels";
    const formData = new FormData();
    formData.append('hadding', sliderinput.hadding);
    formData.append('description', sliderinput.description);
    formData.append('image', sliderinput.image);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
    } catch (error) {
      console.error("There was an error uploading the room!", error);
    }
  };

  return (
    <div className="main-div">
      <form onSubmit={sliderSubmit}>
        <label htmlFor="hadding">Heading</label>
        <input type="text" name="hadding" onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={handleChange} />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DashCarousels;
