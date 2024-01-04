import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login=()=>
{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()


    function authUser()
    {
        axios.post("http://127.0.0.1:4000/login",{email,password}).then((res)=>
        {
            
           if(res.data===true)
           {
            navigate("/welcome")
           }
        }).catch((err)=>
        {
            console.error(err)
        })
    }
    return(
        <>
        <input placeholder="Enter Email" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input placeholder="Enter password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

        <button onClick={authUser}>Login</button>
        </>
    )
}