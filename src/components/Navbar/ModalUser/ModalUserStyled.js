import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--background);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 200px;
  top: calc(50px + 2rem);
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;
