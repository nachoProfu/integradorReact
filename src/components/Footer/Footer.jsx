import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import { FooterContainerStyles } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyles>
        Hecho por IJP Sistemas | All rights reserved
        <FaCopyright /> 
    </FooterContainerStyles>    
  )
}

export default Footer