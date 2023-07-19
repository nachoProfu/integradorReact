import React from 'react'

import { MdOutlineClose } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import ModalCartProduct from './ModalCartProduct';

import { CartBtnContainerStyled, 
    CartBtnStyled, 
    CartLinetotalStyled, 
    CartMainContainerStyled, 
    CartProductsContainerStyled, 
    CartTitleStyled, 
    CartTotalPriceStyled, 
    CloseButtonContainerStyled, 
    ContainerStyled,
    CloseButtonStyled} from './ModalCartStyles'

import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';
    
const ModalCart = () => {

  const hiddenCart = useSelector(state => state.cart.hidden)
  const {cartItems} = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) =>{
    return (acc += item.precio * item.quantity)
  }, 0)

  // console.log(totalPrice)

  const mostrarMje = (mje)=>{
    window.alert(mje);
  };

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
    <AnimatePresence>
        {!hiddenCart && (
        <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            // key='cart-modal'
          >
        <CloseButtonContainerStyled>
        <CloseButtonStyled
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(toggleHiddenCart())}   
        >
        <MdOutlineClose size='20px' />
        </CloseButtonStyled>
        </CloseButtonContainerStyled>

    {/* //carrito principal */}
    <CartMainContainerStyled>
        <CartTitleStyled>Tus Productos</CartTitleStyled>
        <CartProductsContainerStyled>
            {/* //aca van los productos mapeados */}
            {
                cartItems.length ? (
                     cartItems.map((item) => {
                     return <ModalCartProduct {...item} key={item.id} />
                  })
                ) : (
                  <p>No hay productos en el carrito</p>
                )
              }
        </CartProductsContainerStyled>
        <CartLinetotalStyled></CartLinetotalStyled>
        <CartTotalPriceStyled>
            <p>Total: $</p>
            <p>$ {totalPrice}</p>
        </CartTotalPriceStyled>
        <CartBtnContainerStyled>
            <CartBtnStyled
            onClick={()=>{mostrarMje("Gracias por su compra");
                          dispatch(clearCart())} }
            >Comprar
            </CartBtnStyled>
            <CartBtnStyled
            onClick={() => dispatch(clearCart())}
            >Vaciar
            </CartBtnStyled>
        </CartBtnContainerStyled>
    </CartMainContainerStyled>
</ContainerStyled>
)}
</AnimatePresence>
    </>
  )
}

export default ModalCart