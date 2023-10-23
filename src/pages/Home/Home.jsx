import React, { useRef } from 'react'
import { HomeWrapper } from './HomeStyles'

import Hero from '../../components/Hero/Hero';
import Abouts from '../../components/Abouts/Abouts'
import Categorias from '../../components/Categorias/Categorias';
import Products from '../../components/Products/Products';
import Contacts from '../../components/Contacts/Contacts';

import { useSelector } from 'react-redux'

const Home = () => {

    const productsRef = useRef();
    const aboutsRef = useRef();
    const contactsRef = useRef();



    let sectionSelected = useSelector(state=> state.section.sectionSelected)

     const doScroll = () => {

        if (sectionSelected === 'Abouts'){
               window.scrollTo(
                aboutsRef.current.getBoundingClientRect().x,
                aboutsRef.current.getBoundingClientRect().y
            );
          }
        
        if (sectionSelected === "Products"){
            window.scrollTo(
              productsRef.current.getBoundingClientRect().x,
              productsRef.current.getBoundingClientRect().y
         );
        }

        if (sectionSelected === "Contacts"){
          window.scrollTo(
            contactsRef.current.getBoundingClientRect().x,
            contactsRef.current.getBoundingClientRect().y
       );
        }   
    };

  return (
    <HomeWrapper doScroll={doScroll}>
        
        {/* Hero Seccion */}
        <Hero /> 

        {/* Abouts Seccion */}
        <Abouts ref={aboutsRef} /> 
       
        {/* Categories Seccion */}
        <Categorias /> 
        
        {/* Products Seccion */}
        <Products ref={productsRef} /> 
       

        {/* Contacts Seccion */}
        <Contacts ref={contactsRef} /> 

        {/* {console.log(aboutsRef)} */}

    </HomeWrapper>
  )
}

export default Home