import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { motion } from "framer-motion";

export const RegisterContainerStyled = styled.div`
  background: var(--background);
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

export const FormRegister = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

// export const ContainerBtnStyled = styled.div`
//   gap: 20px;
// `;

export const SubmitRegisterStyled = styled(motion.button)`
  color: white;
  background-color: var(--text-nav);
  width: 120px;
  padding: 10px 15px;
  border: 0;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 800;
`;
