import { useEffect,useState } from "react";
import axios from "axios";
import "../DashAsssets/css/carousels.css";

const DashCarousels = ()=>{
   const [sliderinput,setSliderinput] = useState([]);

   const sliderSubmit =()=>{
    let url = "http://localhost:8000/dashboard/carousels";
    axios.post(url, sliderinput)
     .then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.error("There was an error uploading the room!", error);
    });
   }

    return(
        <div className="main-div">
          <form action="">
        
            <label htmlFor="">hadding</label>
            <input type="text" name="hadding" onChange={e => setSliderinput(e.target.value)} />
            <label htmlFor="">Description</label>
            <input type="text" name="description" onChange={e => setSliderinput(e.target.value)} />
            <label htmlFor="">image</label>
            <input type="file" name="image" onChange={e => setSliderinput(e.target.value)} />
            <button onClick={sliderSubmit}>submit</button>
          </form>

          
        </div>
    )
}
export default DashCarousels;