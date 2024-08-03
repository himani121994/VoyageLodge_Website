import React from "react";
import "./topnav.css";
import logo from "../assets/img/logo.avif"

const Topnav =()=>{


    return(
        <nav>
            <div className="main-nav-div">
                <div className="logo-div">
                    <a href="#" style={{textDecoration:"none"}}><img src={logo} alt="logo" className="logo-img"/>
                    <span className="logo-span" >VoyageLodge</span></a>
                    <h3>HOTEL</h3>
                    
                </div>
                <div>

                </div>
            </div>
        </nav>
    )
}
export default Topnav;