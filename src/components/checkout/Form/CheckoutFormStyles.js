import styled from "styled-components";
import { motion } from "framer-motion";
import { Form as FormikForm } from "formik";

export const CheckoutContainerStyled = styled.div`
  width: 100%;
  height: 650px;
  background: var(--background);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  gap: 20px;
  h1 {
    color: var(--text-nav);
  }
`;

export const ContainerInputStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 7px;
`;

export const SubmitCheckoutStyled = styled(motion.button)`
  color: white;
  background-color: var(--text-nav);
  width: 120px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 800;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
