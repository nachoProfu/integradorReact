import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { motion } from "framer-motion";

export const LoginContainerStyled = styled.div`
  background: var(--background);
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  h1 {
    color: var(--text-nav);
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ContainerLineStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  padding-right: 7px;
`;
export const ContainerIconStyled = styled.div`
  padding: 7px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0px 4px 4px 0px;
`;

export const ContainerBtnStyled = styled.div`
  gap: 20px;
`;

export const SubmitStyled = styled(motion.button)`
  color: white;
  background-color: var(--text-nav);
  width: 120px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 800;
`;
