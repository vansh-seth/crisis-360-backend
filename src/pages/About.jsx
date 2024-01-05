//About.jsx
import React from 'react'
import Navbar from './Navbar';
import './about.css';
import aboutimg1 from './rescue.jpeg';
import aboutimg2 from './rescue4.jpeg';

const About = () => {
  return (
    <>
    <Navbar/>
    <div>
      <div className="centereds">
        <h1>
          <span>"Welcome</span> <span>to</span> <span>CRISIS</span> <span>AID</span> <span>360"</span>
        </h1>
      </div>

      <div className="image_s"></div>

      <img src={aboutimg1}
        alt="Rescue"
        height="800px"
        width="1520px"/>

      <div className="sqs-html-contents"><br></br><br></br>
        <h2>
          At Crisis-AID 360, we believe that every life is worth saving, and that's why we are dedicated to providing top-tier rescue services to those in need. Our mission is to be the beacon of hope during life's most challenging moments, offering a helping hand when it's needed most. Our journey began with a vision to provide swift, effective, and compassionate aid to those affected by natural disasters, emergencies, and crises, regardless of geographical boundaries.
        </h2>
      </div>
      <br></br><br></br><br></br>
      <div className="sqs-html-content2s">
        <h1>"Rapid Response, Lifesaving Impact."</h1>
      </div>

      <br /><br /><br /><br></br>

      <div className="centered2s">
        <section className="contain_s">
          <div className="cardaa">
           <div class="sm"><h2 align="center">Our Mission</h2></div>
            <p className="y">
              Our mission is to be the guiding light in times of crisis. We are dedicated to saving lives, providing immediate assistance, and fostering resilient communities. Our unwavering commitment to excellence, compassion, and preparedness drives us to serve those in need during their most challenging moments.
            </p>
          </div>

          <div className="cardbb">
          <div class="sm"><h2 align="center">Our Vision</h2></div>
            <p className="y">
              Our vision is to create a world where no one is left behind during emergencies or disasters. We aspire to be a global leader in rescue and emergency response, setting the standard for professionalism, innovation, and community engagement. Through our efforts, we aim to build a safer, more compassionate, and interconnected world, where individuals and communities are empowered to overcome adversity.
            </p>
          </div>
        </section>
      </div>
      <img src={aboutimg2} alt="Rel-Event" height="600px" width="1520px" />

      <br /><br /><br /><br /><br /><br />

      <div className="sqs-html-content3s">
        <h2>
          We firmly believe that prepared communities are resilient communities. That's why we don't just respond to emergencies; we actively engage with communities to empower them with knowledge and resources. Through workshops, training sessions, and awareness campaigns, we aim to create a culture of safety and readiness in every neighborhood we serve.

          Thank you for visiting us, and we invite you to be part of our mission to bring hope and relief in the face of calamity. Together, we can make a difference, one disaster-stricken area at a time, and help those affected find the strength to rebuild their lives!
        </h2>
      </div>

      <br /><br /><br /><br /><br /><br />
    </div> 
    </>
  )
}

export default About
