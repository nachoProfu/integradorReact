import React from 'react'
import { HamburContainerStyled } from './ModalHamStyled'

import { HamburOverlayStyled } from '../NavbarStyles';

import { HiMenu } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';

import {toggleHiddenHambur} from '../../../redux/hambur/hamburSlice'

const ModalHamb = ({open,handleclick}) => {

  const hiddenMenuHamb = useSelector(state=>state.toggleHambur.hidden);  
  
  const dispatch = useDispatch(); 

  return (
    <>
    {/* {!hiddenMenuHamb && (
    <HamburOverlayStyled
        onClick={()=> dispatch(toggleHiddenHambur())}  
        ishidden={hiddenMenuHamb}
    />)} */}

    <HamburContainerStyled onClick={handleclick}>
        <HiMenu />
    </HamburContainerStyled>
    </>
  )
}

export default ModalHamb