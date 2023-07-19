import React from 'react'
import { AboutsCardStyles, AboutsContainerStyles, AboutsH2Styles, AboutsSectionStyles } from './AboutsStyles'

const Abouts = () => {
  return (
    <AboutsSectionStyles>
        <AboutsH2Styles>Sobre Nosotros</AboutsH2Styles>
        <AboutsContainerStyles>
            <AboutsCardStyles>
              <p>
                Somos un negocio moderno, de alta calidad y con mucho sabor que
                llegó para irrumpir el mercado de la panadería tradicional
              </p>
            </AboutsCardStyles>
            <AboutsCardStyles>
              <p>Elaboramos todos nuestros productos con ingredientes naturales y
                orgánicos, que también son 100% veganos, enfocados siempre en la
                alimentación consciente como premisa
              </p>
            </AboutsCardStyles>
            <AboutsCardStyles>
              <p>
                La calidad es tan importante como el sabor, por eso nuestros
                anificados, acompañamientos y facturas no tienen aditivos ni
                conservantes
              </p>
            </AboutsCardStyles>
        </AboutsContainerStyles>
    </AboutsSectionStyles>
  )
}

export default Abouts
