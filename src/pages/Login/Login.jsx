import React from 'react'
import { LoginContainerStyled, SubmitStyled, Form, ContainerLineStyled, ContainerIconStyled } from './LoginStyles'
import { Formik } from 'formik'

import InputForm from '../../components/UI/InputForm/InputFrom';

import * as Yup from "yup";
import { Link } from 'react-router-dom';

import { FaUserAlt } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";

const regEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const loginValidationSchema = Yup.object({
    email: Yup.string()
      .matches(regEmail, 'Mail no válido')
      .required('Campo requerido'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .max(20, 'Máximo 20 caracteres')
      .required('Campo requerido'),
  });


const loginInitialValues = {
    email: '',
    password: '',
  };

const Login = () => {
  return (
    <LoginContainerStyled>
        <h1>Iniciar Sesion</h1>
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm();
              }}
        >
          {({errors, touched})=>(
          <Form>
            <ContainerLineStyled>
              <InputForm name="email" type='text' placeholder='Email' isError={errors.email} />
              {/* <ContainerIconStyled>
                <FaUserAlt />
              </ContainerIconStyled>  */}
            </ContainerLineStyled>
            <ContainerLineStyled>
              <InputForm name="password" type='password' placeholder='Password' isError={errors.password } />
              {/* <ContainerIconStyled>
                <RiLock2Fill />
              </ContainerIconStyled> */}
            </ContainerLineStyled>
              {/* redirigir a inicio */}  
            <SubmitStyled type='submit'>Ingresar</SubmitStyled>  
              {/* redirigir a register */}
            <Link to='/Register'>
              <SubmitStyled>Registrarse</SubmitStyled>
            </Link>
          </Form>
        )}
        </Formik>
    </LoginContainerStyled>
  )
}

export default Login