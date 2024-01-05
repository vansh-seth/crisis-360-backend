//Helpline.jsx
import React, { useEffect, useState } from 'react';
import './helpline.css';
import Navbar from './Navbar';
import ProfileA from './ProfileA';

const Helpline = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("/Helpline")
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

  return (
    <>
      <Navbar />
      <div className='bgimg'>
        <h1 ALIGN='CENTER' className='headingh'>HELPLINE SERVICES</h1>
        <section className="cont" align='center'>
          {record.length > 0 ? (
            record.map((recordItem, index) => (
              <ProfileA
                key={index}
                name={recordItem.name}
                phone={recordItem.phone}
                location={recordItem.location}
                type={recordItem.type}
                photo={recordItem.photo} // Pass the image URL from MongoDB
              />
            ))
          ) : (
            <p>No data available.</p>
          )}
          <br />
          <a href="" className="style">
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; view more &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </a>
        </section>
      </div>
    </>
  );
}

export default Helpline;
