import React from 'react'
import { FormRegister, RegisterContainerStyled, SubmitRegisterStyled } from './RegisterStyles'
import { Formik } from 'formik'

import InputForm from '../../components/UI/InputForm/InputFrom';

import * as Yup from "yup";


const registerInitialValues = {
    name: '',
    direccion:'',
    telefono:'',
    email: '',
    password: '',
  };

  const phoneRegex = /\d{10}$/;
  const regEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    direccion: Yup.string().required('Campo requerido'),
    telefono: Yup.string().matches(phoneRegex, "Número de telefono inválido").required("Campo requerido"),
    email: Yup.string()
      .matches(regEmail, 'Mail no válido')
      .required('Campo requerido'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .max(20, 'Máximo 20 caracteres')
      .required('Campo requerido'),
  });
  

const Register = () => {
  return (
    <RegisterContainerStyled>
        <h1>Registrarse</h1>
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm();
              }}
        >
        {({errors, touched})=>(
          <FormRegister>
            <InputForm name="name" type='text' placeholder='Nombre'isError={errors.name} />
            <InputForm name="direccion" type='text' placeholder='Direccion' isError={errors.direccion} />
            <InputForm name="telefono" type='text' placeholder='Telefono'isError={errors.telefono} />
            <InputForm name="email" type='text' placeholder='Email'isError={errors.email}/>
            <InputForm name="password" type='password' placeholder='Password'isError={errors.password} />
                {/* redireccionar to login */}
            <SubmitRegisterStyled>
              Registrarse
            </SubmitRegisterStyled>  
          </FormRegister> 
        )}     
        </Formik>
    </RegisterContainerStyled>
  )
}

export default Register