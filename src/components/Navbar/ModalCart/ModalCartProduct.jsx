import React from 'react'

import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';

import { ProductBtnHandler, ProductContainerStyled, ProductHandlerContainerStyled, ProductImgStyled, ProductInfoStyled, ProductPriceStyled, ProductQuantity, ProductTitleStyled } from './ModalCartStyles';

const ModalCartProduct = ({ id, nombre, precio, cardImg, quantity } ) => {
  
    const dispatch = useDispatch()

    return (

    <ProductContainerStyled>
        <ProductImgStyled 
            src={cardImg} 
            alt={nombre} 
        />
        <ProductInfoStyled>
            <ProductTitleStyled>{nombre}</ProductTitleStyled>
            <ProductPriceStyled>$ {precio}</ProductPriceStyled>
        </ProductInfoStyled>
        <ProductHandlerContainerStyled>
            <ProductBtnHandler
                onClick={() => dispatch(removeFromCart(id))}
            >
                {/* {cantidad === 1 ? <IoMdTrash/> : <FaMinus />} */}
                <FaMinus />
            </ProductBtnHandler>
            <ProductQuantity>{quantity}</ProductQuantity>
            <ProductBtnHandler
                onClick={() => dispatch(addToCart({id, nombre, precio, cardImg, quantity}))}
            >
                <FaPlus />
            </ProductBtnHandler>
        </ProductHandlerContainerStyled>
    </ProductContainerStyled>
  )
}

export default ModalCartProduct