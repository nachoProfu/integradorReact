import React from 'react'
import { CartNavContainerStyled, HamburOverlayStyled, 
    NavarLogoContainerStyled, NavbarContainerStyled, 
    NavbarLinkContainerStyled, NavbarListConstainerStyled, 
    NavLinkStyled, 
    SpanStyled,
    UserNavContainerStyled} from './NavbarStyles'

import { FaUserAlt } from 'react-icons/fa';
import CartIcon from './CartIcon/CartIcon';
//import { FaShoppingCart } from 'react-icons/fa';


import { motion } from 'framer-motion';
import ModalCart from './ModalCart/ModalCart';


import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../redux/cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom';
import ModalHamb from './ModalHamb/ModalHamb';
import { HamburListContainerStyled } from './ModalHamb/ModalHamStyled';

//import {toggleHiddenHambur} from '../../redux/hambur/hamburSlice'
import { useState , useRef } from 'react';
import { selectSection } from '../../redux/section/sectionSlice';
import ModalUser from './ModalUser/ModalUser';
import { toggleMenuHidden } from '../../redux/user/userSlice';




const Navbar = () => {

 const dispatch = useDispatch();
 const currentUser = useSelector(state=>state.user.currentUser);
 const navigate = useNavigate();

 //const hiddenMenuHamb = useSelector(state=>state.toggleHambur.hidden);

 const [open, setOpen] = useState(false);

 const handleclick = () => {
    setOpen(!open);
  };


  return (
    <NavbarContainerStyled>
        {/* <ModalCart /> */}
        <div>
            <img style={{height:'70px'}}
                src="https://res.cloudinary.com/djvnzpw39/image/upload/v1686778671/logo_blanco_sf_j2wwrv.png"
                alt="logo mieris"
                //class="logo"
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
                <NavbarLinkContainerStyled onClick={() => dispatch(selectSection('Abouts'))} >
                    Nosotros                      
                </NavbarLinkContainerStyled>
                <NavbarLinkContainerStyled onClick={() => dispatch(selectSection('Products'))}>
                    Productos
                </NavbarLinkContainerStyled>
                <NavbarLinkContainerStyled onClick={() => dispatch(selectSection('Contacts'))}>
                    Contactanos
                </NavbarLinkContainerStyled>
            </HamburListContainerStyled>
          
            {/* <Link  to ='/Login'> */}
                <NavbarLinkContainerStyled>
                    <UserNavContainerStyled onClick={ () => 
                    currentUser
                    ? dispatch(toggleMenuHidden())
                    : navigate("/Login")
                    }>
                        <FaUserAlt /> 
                        <SpanStyled>
                        {
                            currentUser ? `${currentUser.nombre}` : ``
                        }
                        </SpanStyled>
                    </UserNavContainerStyled>        
                </NavbarLinkContainerStyled>

            {/* </Link> */}
            <ModalUser />       
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
                open={open} handleclick={handleclick}
            >
                <ModalHamb
                //  onClick={()=> dispatch(toggleHiddenHambur())}
                 open={open} handleclick={handleclick}
                />
            </NavbarLinkContainerStyled>    
        </NavbarListConstainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar