import  {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./userlogin.css";

const UserLogin = ()=>{
    const NavSigh = useNavigate()
    const [input,setInput] = useState({});

    const OnchangeInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values)=>({...values,[name]:value}))
    }

    const SubmitLogin = ()=>{
      let url = "http://localhost:8000/api/userlogin";
      axios.post(url,input).then((res)=>{
        setInput(res.data)
        console.log(res.data)
        NavSigh("/home");
      })
     
    }
    
    const ClickSingup =()=>{
        NavSigh("/sighup")
    }

    return(
        <div className="mani_userlogin_div">
        <form action="">
            <div className="input-div">
            <label htmlFor="">User Email 
            <input className="form_input" type="text" name="gmail" onChange={OnchangeInput}/></label>
            </div>
            <div className="input-div">
            <label htmlFor="">Password
            <input className="form_input" type="text" name="password" onChange={OnchangeInput}/></label>
            </div>
            <button onClick={SubmitLogin}>Login</button>
        </form>
        <button onClick={ClickSingup}>Sigh Up</button>
        </div>
    )
}
export default UserLogin;