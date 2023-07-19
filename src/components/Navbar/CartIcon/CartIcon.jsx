import React from 'react'

import { NavbarLinkContainerStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice'//'../../redux/cart/cartSlice'
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {

    const totalCartProducts = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    //console.log(totalCartProducts)
    const dispatch = useDispatch();

  return (
    <NavbarLinkContainerStyled>
        <FaShoppingCart onClick={() => dispatch(toggleHiddenCart())} />
        {totalCartProducts > 0 ? 
        <span>{totalCartProducts}</span> 
        :'' }    
    </NavbarLinkContainerStyled>
  )
}

export default CartIcon