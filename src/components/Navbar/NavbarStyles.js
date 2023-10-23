import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

export const NavbarContainerStyled = styled.header`
  background: var(--background);
  width: 100%;
  /* max-width: 1200px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 80px;
`;

export const NavbarListConstainerStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 800;
  padding: 0px 30px;
  gap: 30px;
  text-decoration: none;
`;

export const NavbarLinkContainerStyled = styled(motion.div)`
  color: var(--text-nav);
  &:hover {
    text-decoration: underline;
  }
`;

export const NavarLogoContainerStyled = styled.div`
  height: 80px;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 50;
  width: calc(100vw - 350px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const NavLinkStyled2 = styled.a``;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  &.active {
    //color: #4747ff;
    font-weight: 600;
  }
`;

export const HamburOverlayStyled = styled(motion.div)`
  background-color: var(--background);
  border-bottom: 2px solid var(--secondary);
  width: 90%;
  height: 200px; // cal(100vh - 80px);
  position: absolute;
  top: 80px;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px 30px;
  z-index: 5;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      /* backdrop-filter: blur(4px); */
    `}
`;

//contenedor de carrito y burbuja
export const CartNavContainerStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: -1;

    height: 20px;
    width: 20px;
    text-align: center;
    padding: 4px;
    border-radius: 50%;
    border: 1px solid white;
    color: white;
    background-color: #1f618d;
    font-size: 10px;
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const UserNavContainerStyled = styled.div`
  gap: 50px;
  cursor: pointer;
  span {
    font-size: 1rem;
    margin-left: 10px;
  }
`;
