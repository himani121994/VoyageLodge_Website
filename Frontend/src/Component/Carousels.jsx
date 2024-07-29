import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Carouselslid() {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const loadCarouselData = async () => {
      try {
        let url = "http://localhost:8000/home/getcarouselsimg";
        const response = await axios.get(url);
        setCarousel(response.data);
      } catch (error) {
        console.error("Error fetching carousel data", error);
      }
    };

    loadCarouselData();
  }, []);

  return (
    <Carousel fade>
      {carousel.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={`http://localhost:8000/uploads/${image.img}`} style={{width:"100%",height:"650px"}} alt={image.hadding} />
          <Carousel.Caption>
            <h3>{image.hadding}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carouselslid;
