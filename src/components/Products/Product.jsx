import React from 'react'
import { ProductStyles, ProductsBtnStyles, ProductsInfoStyles } from './ProductsStyles'
import {useDispatch} from "react-redux"

import { addToCart } from '../../redux/cart/cartSlice';

import swal from 'sweetalert';


const Product = ({id,nombre,precio,categoria,cardImg}) => {
  
    const dispatch = useDispatch();

    const mjeExito=()=>{
        swal("Producto Agregado a Carrito", {
            //className: "red-bg",
            timer:1000,
            buttons: false,
            icon: "success",
          });

    }
  
    return (
    <ProductStyles>
        <img
            src={cardImg}
            alt={nombre}
        />
        <h3>{nombre}</h3>
        <ProductsInfoStyles>
            <span>$ {precio}</span>
            <ProductsBtnStyles
             whileTap={{ scale: 0.95 }}
             onClick={() => {dispatch(addToCart({id,nombre,precio,cardImg}));
             mjeExito()}}>
                Agregar
            </ProductsBtnStyles>
        </ProductsInfoStyles>
    </ProductStyles>
  )
}

export default Product