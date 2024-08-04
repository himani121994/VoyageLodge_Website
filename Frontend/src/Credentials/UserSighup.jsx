import  {useState,useEffect} from "react";
import axios from "axios";
const UserSighup = ()=>{
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
            <label htmlFor="">firstname</label>
            <input type="text" name="firstname" />
            <label htmlFor="">lastname</label>
            <input type="text" name="lastname" />
            <label htmlFor="">Mobile number</label>
            <input type="text" name="phone" />
            <label htmlFor="">User Email </label>
            <input type="text" name="username" onChange={OnchangeInput}/>
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={OnchangeInput}/>
            <button onClick={SubmitLogin}>submit</button>
        </form>
        </>
    )
}
export default UserSighup;