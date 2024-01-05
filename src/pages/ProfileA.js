//ProfilA.js
import React from 'react';

const ProfileA = ({ name, phone, location, type, photo }) => {
  const profileImageStyle = {
    backgroundColor: 'black',
    height: '180px',
    backgroundSize: 'cover',
    borderRadius: '15px 15px 0 0',
    backgroundImage: `url(${photo})`
  };

  return (
    <div className="profilea">
      <div className="profile-image profile1" style={profileImageStyle}></div>
      <div className="content">
        <h3 className="h">{name}</h3>
        <p className="TEXT">Phone: {phone}</p>
        <p className="TEXT">Location: {location}</p>
        <p className="TEXT">Type: {type}</p>
      </div>
    </div>
  );
}

export default ProfileA;
