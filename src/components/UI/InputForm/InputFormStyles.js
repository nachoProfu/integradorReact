import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLineStyled = styled.div`
  display: flex;
`;

export const InputStyled = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 4px 4px 4px 4px;
  padding: 6px;
  border: ${({ isError }) => (isError ? "2px solid #fb103d " : "none")};
`;

export const ErrorMjeStyled = styled.span`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
