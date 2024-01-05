//Profile.jsx
import React, { useEffect, useState } from 'react';
import './profile.css';
import Navbar from './Navbar';
import axios from 'axios';

const Profile = () => {
  const [loc, setloc] = useState([]);
  const [record, setRecord] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    repass: '',
    phone: '',
    location: '',
    id: '',
    photo: '',
    type: 'rescue agency',
  });
  useEffect(() => {
    // Fetch user data from MongoDB and populate the form
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/create');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/create', userData);
      console.log('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };


  useEffect(() => {
    fetch("http://localhost:5000/Profile")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(jsonRes => {
        console.log('Fetched data:', jsonRes);
        setRecord(jsonRes);
      })
      .catch(error => {
        console.error('Error fetching helpline data:', error);
        setRecord([]);  // Set an empty array in case of error
      });
  }, []);

  console.log('Record state:', record);

  useEffect(() => {
    fetch("http://localhost:3003/Profile")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(jsonRes => {
        console.log('Fetched data:', jsonRes);
        setloc(jsonRes);
      })
      .catch(error => {
        console.error('Error fetching helpline data:', error);
        setloc([]);  // Set an empty array in case of error
      });
  }, []);

  console.log('Record state:', record);

  return (
    <>
      <Navbar />
      <div className="pimg">
        <br />
        <im></im>
        <div className='leftp'>
        
          <pf>Profile</pf>
          <div className='logop'>
            <img src='https://www.centralaidagency.org/uploads/1/2/9/4/129459756/published/emergency-response-force-1-patch-copy-copy.png?1614568418' height="200px" alt="logo" />
          </div>
          <div className='contentp'>
          <form onSubmit={handleSubmit}>
              <label>
                Name:
                <br/>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                password:
                <br/>
                <input
                  type="text"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                re-enter password:
                <br/>
                <input
                  type="text"
                  name="repass"
                  value={userData.repass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                phone no.:
                <br/>
                <input
                  type="number"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                photo:
                
                <br/>
                <input
                  type="text"
                  name="photo"
                  value={userData.photo}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                id:
                
                <br/>
                <input
                  type="text"
                  name="id"
                  value={userData.id}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                type:
                
                <br/>
                <input
                  type="text"
                  name="type"
                  value={userData.type}
                  onChange={handleInputChange}
                />
              </label>
              <br/>
              <br/>
              <button type="submit">Update Profile</button>
            </form>
          </div>
        </div>
        <div className='rightp'>
          <alert>   Alert  </alert>
          {record.length > 0 ? (
          record.map((recordItem, index) => (
            <div key={index}>
              <h3 ALIGN="CENTER" >{recordItem.callf} </h3>
              <h3 ALIGN="CENTER" >{recordItem.callp}</h3>
              <h3 ALIGN="CENTER" >{recordItem.calla}</h3>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
            
        {loc.length > 0 ? (
  loc.map((recordItem, index) => (
    <div key={index}>
      <h3 style={{ textAlign: 'center' }}>Latitude: {recordItem.coordinates.lat}</h3>
      <h3 style={{ textAlign: 'center' }}>Longitude: {recordItem.coordinates.lng}</h3>
    </div>
  ))
) : (
  <p>No data available.</p>
)}


        </div>
        
      </div>
    </>
  );
}

export default Profile;
