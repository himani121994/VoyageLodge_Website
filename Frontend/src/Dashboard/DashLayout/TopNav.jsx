import React from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";
import "./topnav.css";


const AdminHome = ()=>{
  let mynav = useNavigate()
const logout=()=>{
alert("are you sour...")
mynav("/home")

  }
    return(
        <>
        <aside id="aside">
          <div id="aside-heading">
            <img 
               src="\src\assets\cclogos.png"
              alt="Logo" 
            />
            <>

            </>
            <h2>Admin</h2> 
            <hr style={{marginTop:"20px"}}/>
            <Link className="desh-link" to="uploadroom">uploadRoom</Link>
            <Link className="desh-link" to="alltech" >All Technology</Link>
            
          </div>
        </aside>
        <nav id="nav">
          <div style={{position:"absolute",right:"50px"}} onClick={logout}  >
          Logout
          </div>
        </nav>
        
        <Outlet />
      </>
    )
}

export default AdminHome;
