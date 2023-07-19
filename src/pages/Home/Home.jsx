import React, { useRef } from 'react'
import { CategoriasWrapper, HomeWrapper } from './HomeStyles'

import Hero from '../../components/Hero/Hero';
import Abouts from '../../components/Abouts/Abouts'
import Categorias from '../../components/Categorias/Categorias';
import Products from '../../components/Products/Products';
import Contacts from '../../components/Contacts/Contacts';

const Home = () => {

    const productsRef = useRef();

    const doScroll = () => {
        window.scrollTo(
          productsRef.current.getBoundingClientRect().x,
          productsRef.current.getBoundingClientRect().y
        );
      };
  return (
    <HomeWrapper>
        {/* Hero Seccion */}
        <Hero doScroll={doScroll} />

        {/* Abouts Seccion */}
        <Abouts />

        {/* Categories Seccion */}
        <Categorias />
        
        {/* Products Seccion */}
        <Products />

        {/* Contacts Seccion */}
        <Contacts />
    </HomeWrapper>
  )
}

export default Home