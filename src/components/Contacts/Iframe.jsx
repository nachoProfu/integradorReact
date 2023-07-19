import React from 'react'
import { ContactsContainerIframeStyles } from './ContactsStyles'


const Iframe = () => {


  return (

    <ContactsContainerIframeStyles>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.08948806903!2d-60.695362135299014!3d-31.63140011384909!2m3!1f0!2f0!3f0!
          3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9eb45c0b8f5%3A0x31f57dd99326b103!2sMarcial%20Candioti%204110%2C%20S3002%20Santa%20Fe!5e0!3m2!1se
          s!2sar!4v1667868312322!5m2!1ses!2sar"
          //  style={{border: '0', height: '350px', width: '400px'}}
          //  allowfullscreen=""
          //  loading="lazy"
          //  referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </ContactsContainerIframeStyles>
  )
}

export default Iframe