import  {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      })
    }
    
    const ClickSingup =()=>{
        NavSigh("/sighup")
    }

    return(
        <>
        <form action="">
            <label htmlFor="">User Email </label>
            <input type="text" name="email" onChange={OnchangeInput}/>
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={OnchangeInput}/>
            <button onClick={SubmitLogin}>submit</button>
        </form>
        <button onClick={ClickSingup}>Sigh Up</button>
        </>
    )
}
export default UserLogin;