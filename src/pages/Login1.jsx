//Login1.jsx
import React, { useState } from 'react'
import Navbar from './Navbar';
import { useNavigate,Link } from 'react-router-dom';
import './login.css';
import axios from "axios"
import bg from './bglogin.jpeg';


export const Login1 = () => {

  const history=useNavigate();

  const[id,setid]=useState('')
  const[password,setpassword]=useState('')

  
async function submit(e) {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3001/", {
      id: id,
      password: password
    });

    if (response.data === "exist") {
      history("/Profile", { state: { id: id } });
    } else if (response.data === "notexist") {
      alert(" invalid  id or password ");
    }
  } catch (error) {
    alert("Wrong details");
    console.error(error);
  }
}

  return (
    <>
    <Navbar/>
    <div className="Bb">


           <div className="L">
            <br/> <br/> <br/>
            <logi>
            <pp>Crisis Aid 360</pp>
            <br/><br/>
            <l>A site meant to help people in need</l>
            </logi>
           

          
           
           </div>



           <div className="R">
            <le>Login</le><br/><br/><br/>
             <div className="inputs">
               <input type="number" placeholder="ID"  onChange={(e)=>{setid(e.target.value)}} name="" id=""/>
               <br /><br/>
               <input type="password" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}} name="" id=""/>
               <br /><br/> <br/>
        
   

               <button><Link to="/Profile" style={{ textDecoration: "none", color:"White"}} onClick={submit} > Login </Link></button>

             </div>
             <br />
             <p>
             &nbsp;&nbsp;&nbsp;Don't have an account? <Link to="/signup" style={{ textDecoration: "none" ,color:"Pink" }}>Create your account</Link>
             </p>
           
           </div>
         </div>
        
         
   </>
  )
}
export default Login1;