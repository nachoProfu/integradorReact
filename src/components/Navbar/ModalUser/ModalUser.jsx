import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { ModalContainerStyled, UsernameStyled } from './ModalUserStyled';
import { setCurrentUser, toggleMenuHidden } from '../../../redux/user/userSlice';

const ModalUser = () => {

    const {currentUser, hiddenMenu} = useSelector(state => state.user);
    const dispatch = useDispatch();

  return (
    <AnimatePresence>
    {!hiddenMenu && (
      <ModalContainerStyled
        initial={{ translateX: 5 }}
        animate={{ translateX: 10 }}
        exit={{ translateX: 5 }}
        transition={{ duration: 0.5 }}
       >
        <UsernameStyled>{currentUser?.nombre}</UsernameStyled>
        <span onClick={() => {
          dispatch(setCurrentUser(null))
          dispatch(toggleMenuHidden())
        }}>Cerrar Sesion</span>
      </ModalContainerStyled>
    )}
  </AnimatePresence>
  );
};

export default ModalUser