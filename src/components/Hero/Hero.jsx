import React from 'react'
import { HeroContainerInfoStyled, HeroContainerStyled, HeroContanerImgStyled } from './HeroStyles'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroContanerImgStyled>
            <HeroContainerInfoStyled>
            <h1>Encontra tu camino hacia el <span>bienestar corporal</span></h1>
                <p>
                Elaboramos pan y derivados exclusivamente a partir de cereales
                enteros orgánicos transformados en harina 100% integral. Con toda la
                fibra, y los nutrientes que aportan el salvado y el gérmen de trigo
                en proporciones natural y armónicamente balanceadas. Esto le aporta
                un sinfín de beneficios a tu salud y al funcionamiento natural de tu
                metabolismo demorando naturalmente y armoniosamente la incorporación
                de los hidratos de carbono a tu cuerpo.
                </p>
                <a href="#abouts" >Quienes Somos </a>
            </HeroContainerInfoStyled>
        </HeroContanerImgStyled>
    </HeroContainerStyled>
  )
}

export default Hero