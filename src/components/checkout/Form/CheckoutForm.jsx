import React from 'react'
import { CheckoutContainerStyled ,SubmitCheckoutStyled, Form, ContainerInputStyled} from './CheckoutFormStyles'
import { Formik } from 'formik'


import InputFrom from '../../UI/InputForm/InputFrom';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../axios/axiosOrders';
import { clearCart } from '../../../redux/cart/cartSlice';

const phoneRegex = /\d{10}$/;

const checkoutValidationSchema = Yup.object({
    nombre: Yup.string()
      .min(4,'Minimos de 4 caracteres')
      .required('Campo requerido'),
    direccion: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('Campo requerido'),
    telefono: Yup.string()
      .matches(phoneRegex, "Número de telefono inválido")
      .required("Campo requerido"),
  });



const checkoutInitialValues = {
    nombre: '',
    direccion: '',
    telefono:'',
  };

const CheckoutForm = ({cartItems,price}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state=>state.user);

  return (

    <CheckoutContainerStyled>
        <h1>CheckOut Pedidos</h1>
        <Formik
            initialValues={checkoutInitialValues}
            validationSchema={checkoutValidationSchema}
            onSubmit={ async (values, {resetForm}) => {
                // console.log(values);
                // resetForm();
                //aca hay que crear el pedido y asignarle la orden
                const dataOrder ={
                    items:cartItems,
                    shipment:{...values},
                    total: price + 1500
                };
                try {
                    const orderCreate = await createOrder(dataOrder,currentUser);
                    if(orderCreate){
                        alert("Orden creada correctamente");
                        resetForm();
                        dispatch(clearCart());
                        navigate('/');
                    }
                } catch (error) {
                    console.log(error);
                    alert("Error al crear la orden");
                }

           }}
        >
        {({errors, touched})=>(
          <Form> 
            <ContainerInputStyled>
                <InputFrom 
                    name="nombre" 
                    type='text' 
                    placeholder='nombre' 
                    isError={errors.nombre} />
            </ContainerInputStyled>
  

            <InputFrom 
                name="direccion" 
                type='text' 
                placeholder='Direccion' 
                isError={errors.direccion} />
            <InputFrom 
                name="telefono" 
                type='text' 
                placeholder='Telefono' 
                isError={errors.telefono} />


              {/* redirigir  */}  
              
            <SubmitCheckoutStyled type='submit'>
              Finalizar Pedido
            </SubmitCheckoutStyled>  
          </Form>
        )}
        </Formik>
    </CheckoutContainerStyled>
  )
}

export default CheckoutForm