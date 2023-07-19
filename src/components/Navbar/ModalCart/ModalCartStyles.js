import styled from "styled-components";
import { motion } from "framer-motion";

//producto

export const ProductContainerStyled = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--background);
  border-radius: 10px;

  @media (max-width: 665px) {
    padding: 4px;
    gap: 7px;
  }
`;

export const ProductImgStyled = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 7px;
`;

export const ProductInfoStyled = styled.div`
  padding: 10px;

  @media (max-width: 665px) {
    padding: 7px;
  }
`;

export const ProductTitleStyled = styled.h3`
  color: var(--text-nav);
  font-size: 14px;
  font-weight: 400;
  padding: 10px;

  @media (max-width: 665px) {
    padding: 7px;
    font-size: 13px;
  }
`;

export const ProductPriceStyled = styled.span`
  color: var(--text-nav);
  font-size: 14px;
  font-weight: 800;

  @media (max-width: 665px) {
    font-size: 13px;
    font-weight: 800;
  }
`;

export const ProductHandlerContainerStyled = styled.div`
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid var(--secondary);
  border-radius: 5px;

  @media (max-width: 665px) {
    padding: 4px 4px;
    gap: 15px;
  }
`;

//antes el boton era un span
export const ProductBtnHandler = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  font-weight: 400;
  border-color: var(--background);
  border-radius: 5px;
  /* box-shadow: 0px 0px var(--background); */

  /* @media (max-width: 665px) {
    font-size: 13px;
    
  } */
`;

export const ProductQuantity = styled.span`
  color: var(--text-nav);
  font-size: 14px;
  font-weight: 400;
`;

///carrito

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 350px;
  height: 80px;

  padding: 2rem;
  background-color: var(--background);
  border-left: 2px solid var(--secondary);
  /* border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3); */

  @media (max-width: 665px) {
    width: 300px;
  }
`;

export const CartMainContainerStyled = styled(motion.div)`
  position: absolute; /* ver si es absolute o fixed */
  top: 80px; /* ver cuanto ocupa header */
  right: 0;
  padding: 7px 10px;
  background: var(--background);
  border-left: 2px solid var(--secondary);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100vh - 70px);
  width: 350px;
  overflow-y: scroll;
  z-index: 2;
  /* display: none; */

  @media (max-width: 665px) {
    width: 300px;
  }
`;

//Ver la burbuja de carrito

//Contenedor de productos

export const CartProductsContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 10px;
`;

//boton de cerrar, revisar los estilos

export const CloseButtonContainerStyled = styled.div`
  top: 0;
  height: 70px;
  width: 100;
  background-color: var(--background);
  display: flex;
  justify-content: flex-end;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--text-nav);
  color: white;
  cursor: pointer;
`;

//ver si no conviene hacer un contenedor y un h2 adentro
export const CartTitleStyled = styled.h2`
  color: var(--text-nav);
  font-size: 20px;
  font-weight: 600;
`;

//ver lo de la linea total
export const CartLinetotalStyled = styled.span`
  margin-top: 20px;
  border: 0.5px solid var(--text-nav);
`;

//contenedor totales
export const CartTotalPriceStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  p {
    color: var(--text-nav);
    font-size: 15px;
    font-weight: 800;
  }
`;

//contenedor botones

export const CartBtnContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CartBtnStyled = styled(motion.button)`
  color: white;
  background-color: var(--text-nav);
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  min-width: 320px;

  @media (max-width: 665px) {
    min-width: 270px;
  }
`;
