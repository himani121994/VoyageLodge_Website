import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div id="row">
          <img width={200} src="/src/assets/cclogos.png" alt="Company Logo" /><br />
          <div id="col">
            <h1>General <div id="under-line"><span></span></div></h1>
            <ul>
              <li>Sign Up</li>
              <li>Help Center</li>
              <li>About</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Developers</li>
            </ul>
          </div>
          <div id="col">
            <h1>Browse LinkedIn <div id="under-line"><span></span></div></h1>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          {/* <div id="col">
            <h1>Business Solutions <div id="under-line"><span></span></div></h1>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div> */}
          <div id="col">
            <h1>Directories <div id="under-line"><span></span></div></h1>
            <ul id="social-icons">
              {/* <li>Members</li>
              <li>Jobs</li> */}
              <li>Companies</li>
              <li>Featured</li>
              <li>Learning</li>
              <li>Posts</li>
              <li>Articles</li>
            </ul>
          </div>
        </div>
        <hr />
        <p id="coright">Easy for use my website © 2023. All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Footer;
