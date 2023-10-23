import React from 'react'
import { ErrorMjeStyled, InputContainerStyled, InputStyled } from './InputFormStyles'

import { ErrorMessage, Field } from 'formik';


const InputFrom = ({name, type, placeholder, isError}) => {
  //console.log(isError)
  return (
        <InputContainerStyled>
            <Field  
                name={name}
                type={type}
                placeholder={placeholder} 
                isError= {isError}
                as={InputStyled} />
            
            <ErrorMessage 
                name={name}
                component={ErrorMjeStyled} />
        </InputContainerStyled> 
  )
}

export default InputFrom