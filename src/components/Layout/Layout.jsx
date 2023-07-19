import React from 'react'

import { LayoutWrapper } from './LayoutStyles';


const Layout = ({children}) => {

    //ver temas de rutas
  return (
    <LayoutWrapper >{children}</LayoutWrapper>
  )
}

export default Layout