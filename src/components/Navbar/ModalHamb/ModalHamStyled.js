import styled from "styled-components";
import { motion } from "framer-motion";

export const HamburContainerStyled = styled.div`
  display: none;
  font-size: 25px;
  color: var(--text-nav);

  @media (max-width: 665px) {
    display: flex;
  }
`;

export const HamburListContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 30px;

  @media (max-width: 665px) {
    background-color: var(--background);
    border-bottom: 2px solid var(--secondary);
    width: 90%;
    height: cal(100vh - 80px);
    position: absolute;
    top: 80px;
    left: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 45px 30px;
    z-index: 2;
    /* right: ${(props) => (props.open ? "0" : "-100%")}; */
    display: ${(props) => (props.open ? "none" : "flex")};
  }
`;
