import  {useState,useEffect} from "react";
import axios from "axios";
const UserLogin = ()=>{
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
    return(
        <>
        <form action="">
            <label htmlFor="">User Email </label>
            <input type="text" name="email" onChange={OnchangeInput}/>
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={OnchangeInput}/>
            <button onClick={SubmitLogin}>submit</button>
        </form>
        </>
    )
}
export default UserLogin;