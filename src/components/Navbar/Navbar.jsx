import React from 'react'
import { CartNavContainerStyled, HamburOverlayStyled, 
    NavarLogoContainerStyled, NavbarContainerStyled, 
    NavbarLinkContainerStyled, NavbarListConstainerStyled, 
    NavLinkStyled } from './NavbarStyles'

import { FaUserAlt } from 'react-icons/fa';
import CartIcon from './CartIcon/CartIcon';
//import { FaShoppingCart } from 'react-icons/fa';


import { motion } from 'framer-motion';
import ModalCart from './ModalCart/ModalCart';


import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../redux/cart/cartSlice'//'/../../redux/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import ModalHamb from './ModalHamb/ModalHamb';
import { HamburListContainerStyled } from './ModalHamb/ModalHamStyled';

import {toggleHiddenHambur} from '../../redux/hambur/hamburSlice'
import { useState } from 'react';

const Navbar = () => {

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const hiddenMenuHamb = useSelector(state=>state.toggleHambur.hidden);

 const [open, setOpen] = useState(false);

 const handleClick = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainerStyled>
        {/* <ModalCart /> */}
        <div>
            <img style={{height:'70px'}}
                src="https://res.cloudinary.com/djvnzpw39/image/upload/v1686778671/logo_blanco_sf_j2wwrv.png"
                alt="logo mieris"
                class="logo"
            /> 
        </div>
        <NavbarListConstainerStyled>

            <HamburListContainerStyled open={open}>
                <Link to='/'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <NavbarLinkContainerStyled>
                            Home
                        </NavbarLinkContainerStyled>
                    </motion.div>
                </Link>
                <NavbarLinkContainerStyled >
                    Nosotros
                </NavbarLinkContainerStyled>
                <NavbarLinkContainerStyled>
                    Productos
                </NavbarLinkContainerStyled>
                <NavbarLinkContainerStyled>
                    Contactanos
                </NavbarLinkContainerStyled>
            </HamburListContainerStyled>
          
            <Link  to ='/Login'>
                <NavbarLinkContainerStyled>
                    <FaUserAlt />      
                </NavbarLinkContainerStyled>
            </Link>
            <NavbarLinkContainerStyled>
                <ModalCart onClick={() => dispatch(toggleHiddenCart())} />
                {/* <FaShoppingCart onClick={() => dispatch(toggleHiddenCart())} />   */}
                <CartNavContainerStyled>
                    <CartIcon/>
                </CartNavContainerStyled>
            </NavbarLinkContainerStyled>
            
            {/* //menu hamburguesa */}
            <NavbarLinkContainerStyled
                // onClick={()=> dispatch(toggleHiddenHambur())}
                open={open} handleClick={handleClick}
            >
                <ModalHamb
                //  onClick={()=> dispatch(toggleHiddenHambur())}
                 open={open} handleClick={handleClick}
                />
            </NavbarLinkContainerStyled>
            
        </NavbarListConstainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar