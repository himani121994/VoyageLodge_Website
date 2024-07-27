import { useEffect,useState } from "react";
import axios from "axios";
import "../DashAsssets/css/carousels.css"
const DashCarousels = ()=>{
    return(
        <div className="main-div">
          <form action="">
        
            <label htmlFor="">hadding</label>
            <input type="text" name="hadding" />
            <label htmlFor="">Description</label>
            <input type="text" name="description" />
            <label htmlFor="">image</label>
            <input type="file" name="image" />
          </form>

          
        </div>
    )
}
export default DashCarousels;