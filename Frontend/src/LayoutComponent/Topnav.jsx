import React from "react";
import "./topnav.css";
import logo from "../assets/img/logo.avif"
import { FaRegUser } from "react-icons/fa";

const Topnav = () => {
    return (
        <nav>
            <div className="main-nav-div">
                <div className="logo-div">
                    <a href="#" style={{ textDecoration: "none" }}>
                        <img src={logo} alt="logo" className="logo-img" />
                        <span className="logo-span">VoyageLodge</span>
                    </a>
                    <h3>HOTEL</h3>
                </div>
                <div className="search-div">
                    <input
                        className="search-topnav-input"
                        type="text"
                        placeholder="Search..."
                    />
                    <button>Search</button>
                </div>
                <div className="user-div">
                    <FaRegUser className="user" />
                </div>
            </div>
        </nav>
    );
};

export default Topnav;
