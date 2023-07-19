import styled from "styled-components";

export const FooterContainerStyles = styled.footer`
  background-color: var(--text-nav);
  color: white;
  padding: 30px 5px;
  text-align: center;
  font-size: 15px;
  gap: 10px;
`;

export const ModalContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  color: white;
  background-color: #1f618d;
  position: fixed;
  bottom: 10px;
  left: 70%;
  width: 30%;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  transform: translateY(200%);
`;
