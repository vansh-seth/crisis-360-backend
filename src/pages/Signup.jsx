//Signup.jsx
import React, { useState } from 'react'
import Navbar from './Navbar';
import './signup.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


export const Signup = () => {
  const history=useNavigate();
  const [input, setInput] = useState({
    name: '',
    password: '',
    repass: '',
    phone: '',
    location: '',
    id: '',
    photo: '',
    type: 'rescue agency', // Default value for the "Type" select
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    const newSchema = {
      name: input.name,
      password: input.password,
      repass: input.repass,
      phone: input.phone,
      location: input.location,
      id: input.id,
      photo: input.photo,
      type: input.type,
    };
  
    axios
      .post('http://localhost:3001/Signup', newSchema)
      .then(res => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/helpline", { state: { id: newSchema.id } });
        }
      })
      // .catch(e => {
      //   alert("Wrong details");
      //   console.log(e);
      // });
  }
  return (
    <>
    <Navbar/>
    
    <div className="box">
    <div className="noi">
    <soi>Crisis Aid 360 </soi>
    {/* <toi>360</toi> */}
    <br/><br/>
<coo>Be a part of greater<br/></coo>
<poo>good</poo>

    </div>
    <div className="koi">
      <div className="woi">
      Signup
      </div>
     
      <br/>
      <div className="input">
        <input type="text" placeholder="Name" onChange={handleChange} name="name" value={input.name}/><br/>
        <input type="password" placeholder="Password" onChange={handleChange} name="password" value={input.password}/><br/>
        <input type="password" placeholder=" Re-enter Password" onChange={handleChange} name="repass" value={input.repass}/><br/>
        <input type="number" placeholder="Mobile number" onChange={handleChange} name="phone" value={input.phone}/><br/>
        <input type="text" placeholder="Location" onChange={handleChange} name="location" value={input.location}/><br/>
        <input type="number" placeholder="Unique ID" onChange={handleChange} name="id" value={input.id}/><br/>
        <input type="link" placeholder="Photo" onChange={handleChange} name="photo" value={input.photo}/><br/>
        <select name="type" onChange={handleChange} value={input.type}>
            <option value="other" id="type" onChange={handleChange}>Type</option>
        
            <option value="fire" id="fire" onChange={handleChange}>Fire Brigade</option>
    

            <option value="hospital" id="hospital" onChange={handleChange}>Hospital</option>
            <option value="police" id="police" onChange={handleChange}>Police</option>

        </select>

      </div>
      <div className="R">
      <button2 onClick={handleClick} type="submit" id="submitDetails" name="submitDetails" value="Submit"><Link to="/helpline" style={{ textDecoration: "none", color:"White" }} >Sign-up</Link></button2>

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />


      </div>
    </div>
    </div>
    



    </>
  );
};
export default Signup;