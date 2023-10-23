import React from 'react'
import { ContainerCheckoutStyled } from './CheckoutStyles'
import CheckoutForm from '../../components/checkout/Form/CheckoutForm'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const {cartItems} = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((acc, item) =>{
    return (acc += item.precio * item.quantity)
  }, 0)

  return (
    <ContainerCheckoutStyled>
        <CheckoutForm
        cartItems={cartItems}
        price ={totalPrice} />
        {/* ver ordenes */}
    </ContainerCheckoutStyled>
  )
}

export default Checkout