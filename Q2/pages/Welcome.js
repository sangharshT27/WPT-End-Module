// import axios from "axios"
// import { useCallback, useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

// export function Welcome(){

//     const [users,setUsers]=useState([])
//     const navigate=useNavigate()

//      const fetchdata=useCallback(()=>{
//         axios.get("http://127.0.0.1:4000/getusers").then((response)=>{
//             setUsers(response.data)
//         }).catch((err)=>{
//             console.log(err)
                
            
//         })
//     },[])

//     useEffect(()=>{
//         fetchdata()
//     },[fetchdata])

// function updateUser(user){
//     navigate("/update",{state:user.user})
// }


// function deleteUser(user){
//     axios.post("http://127.0.0.1:4000/deleteuser",{id:user.id}).then((response)=>{
//         console.log(response.data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }
    
    
//     return(
//         <>
//         <h1>Welcome User</h1>

//         <table border="solid black 2px">
//             <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Mobile</th>
//                 <th>Email-Id</th>
//                 <th>Actions</th>
//             </tr>

//             {users.map((u,i)=>{
//                 <tr>
//                     <td key="{u.id}">{i}</td>
//                     <td>{u.name}</td>
//                     <td>{u.age}</td>
//                     <td>{u.mobile}</td>
//                     <td>{u.email}</td>

//                     <td>
//                         <button onClick={updateUser(u)}>Update</button>
//                         <button onClick={deleteUser(u)}>Update</button>
                        
//                     </td>
//                 </tr>
//             })}
//         </table>



//         </>
//     )
// }


import axios from "axios"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react";



export const Welcome=()=>
{
    const [users, setUsers] = useState([]);
    const navigate=useNavigate()
  
    const fetchData=useCallback(()=>
    {
        axios.get("http://localhost:4000/getusers").then((response)=>
        {
            setUsers(response.data)
        }).catch((error)=>
        {
            console.error(error)
        })
    },[])

    useEffect(()=>
    {
        fetchData()

    },[fetchData])

    function updateUser(user)
    {
    navigate("/update",{state:{user:user}})
    }
    // function deleteUser(id)
    // {
    //     axios.post("http://localhost:4000/deleteuser",
    //     {id:user.id}).then((response)=>
    //     {
    //         console.log(response.data)
    //     }).catch((err)=>
    //     {
    //         console.error(err)
    //     })
    // }

    function deleteUser(user)
    {
        axios.post("http://localhost:4000/deleteuser",{id:user.id}).then((response)=>
        {
            console.log(response.data)
        }).catch((err)=>
        {
            console.error(err)
        })
    }




    return(<>
        <h1>Welcome User</h1>

        <table border="solid 1px">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Email-id</th>
                <th>Actions</th>  
            </tr>
            {users.map((u,i)=>
            {
                return(<>
                
                <tr>
                    <td key={u.id}>{i}</td>
                    <td>{u.name}</td>
                    <td>{u.age}</td>
                    <td>{u.mobile}</td>
                    <td>{u.email}</td>
                    <td>
                        <button onClick={()=>updateUser(u)}>Update</button>
                        <button onClick={()=>deleteUser(u)}>Delete</button>
                    </td>
                </tr>
                
                </>)
            })}
        </table>
    
    </>)
}