import axios from "axios"
import { useState } from "react"

export function Register(){
const [name,setName]=useState("")
const [age,setAge]=useState(0)
const[mobile,setMobile]=useState(0)
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")


    function saveUser(){

        axios.post("http://127.0.0.1:5000/register",{name,age,mobile,email,password}).then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })


    }
    return(
        <>
       <label>Name:</label>
        <input type="text" value={name} placeholder="Enter your Name" 
        onChange={(e)=>{setName(e.target.value)}}/>



        <label>Age:</label>
        <input type="number" value={age} placeholder="Enter your age" 
        onChange={(e)=>{setAge(e.target.value)}}/>

        <label>Mobile:</label>
        <input type="tel" value={mobile} placeholder="Enter your Name" 
        onChange={(e)=>{setMobile(e.target.value)}}/>

           <label>Email:</label>
        <input type="email" value={email} placeholder="Enter your Name" 
        onChange={(e)=>{setEmail(e.target.value)}}/>
        
        <label>Password:</label>
        <input type="password" value={password} placeholder="Enter your Name" 
        onChange={(e)=>{setPassword(e.target.value)}}/>

        <button onClick={saveUser}>Register</button>
         </>
    )
}