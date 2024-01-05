//Alert.jsx
import React from 'react'
import "./Alert.css"
import { FaAmbulance } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { MdLocalPolice } from "react-icons/md";
import{Button, IconButton } from '@mui/material'
import { red } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';


 
const Alert = () => {
  const [message, setMessage] = useState('');

  const handleButtonclick = async (msg) => {
    setMessage(msg);
    await axios.post('http://localhost:5000/message', { call: msg });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          // Send a POST request to the server to save the location
          axios.post('http://localhost:3003/create', {
            lat: location.lat,
            lng: location.lng
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };


  // function handleClick(event) {
  //   event.preventDefault();
  
  //   const newSchema = {
  //     callf: input.callf,
  //     callp: input.callp,
  //     calla: input.calla // Capture the selected "Type"
  //   };
  
  // console.log(newSchema);
  //   axios
  //     .post('http://localhost:3002/create', newSchema)
  //     .then((response) => {
  //       console.log(response.data); // Handle success, e.g., show a success message
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle errors, e.g., show an error message
  //     });
  // }

  // const [color, setColor] = useState("white")
  const useGeoLocation = () => {
    const [location , setLocation] = useState({
      loaded : false ,
      coordinates: {lat: "" ,lng: ""} 
    });
    const onsSuccess = (location) =>{
      setLocation({
        loaded:true ,
        coordinates :{
          lat : location.coords.latitude,
          lng : location.coords.longitude, 
        },
      });
    };
    const onError = error => {
      setLocation({
        loaded:true ,
        error,
      });
    };
    useEffect(() => {
      if( !("geolocation" in navigator)){
        onError({
          code : 0, 
          message: "Geolocation not supported",
        });
      }
      navigator.geolocation.getCurrentPosition(onsSuccess , onError);

    }, []);
    
    return location;
  };
  const location = useGeoLocation();
  const [backgroundColor, setBackgroundColor] = useState("#8d2222d3")
  const handleButtonClick = () => {
      setBackgroundColor('#de0000');
      
      setTimeout(() => {
          setBackgroundColor("#8d2222d3")
      },1000)
    }

  const buttonStyle = {
    backgroundColor: '#8d2222d3', 
    color: 'white', 
    size : 'large',
    fontSize: '50px',
    padding: '10px',
    cursor: 'pointer',
    border: '8px solid white',
    marginLeft: '40px',
    marginTop : "20px"
  };

  // const click = color => {
  //   setColor(color)
  // }
  // useEffect(() => {
  //   document.body.style.backgroundcolor = color
  // }, [color])
  
  return (
    <>
    <Navbar/>
    <div className='body' style={{backgroundColor}}>
     <div className="loader">
        <div className="loader-circle" ></div>
        <div className="exclamation-mark" >!</div>
    </div>
    <div className="container"> 
      <div className="type" style={{justifyContent:"space-between" , color:"white"}}><span style={{position :"fixed", marginLeft: "70px"}}>fire</span><span style={{marginLeft : "185px"}}>police</span ><span style={{marginLeft : "70px"}}>ambulance</span>
       <div className="buttons">
        <span>
        <IconButton className='type-button' style={buttonStyle} onClick={() => { handleButtonClick(); handleButtonclick('fire'); }}>
    <BsFire />
</IconButton>
        </span>
        <span>
        <IconButton className='type-button' style={buttonStyle} onClick={() => { handleButtonClick(); handleButtonclick('police'); }}>
    <MdLocalPolice />
</IconButton>
        </span>
        <span>
        
<IconButton className='type-button' style={buttonStyle} onClick={() => { handleButtonClick(); handleButtonclick('ambulance'); }}>
    <FaAmbulance />
</IconButton>
        </span>
      </div>
    </div>
    </div>
    </div>
    {location ? JSON.stringify(location) : ""}
    {location && console.log('Location:', location)}
    </>
  )
}

export default Alert