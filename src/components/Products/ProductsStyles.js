import styled from "styled-components";

import { motion } from "framer-motion";

import swal from "sweetalert";

export const ProductsSectionStyles = styled.section`
  padding: 70px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  background-color: var(--background);
`;

export const ProductsH2Styles = styled.h2`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 665px) {
    font-size: 26px;
  }
`;

export const ProductsCategoriesContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 15px;
`;

export const ProductsCategoryBtnStyles = styled.button`
  color: white;
  background-color: var(--text-nav);
  border: var(--text-nav);
  width: 120px;
  padding: 7px 0px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  :hover {
    transform: scale(1.1);
  }
  .active {
    background-color: #1f618d;
  }
`;

export const ProductsContainerStyles = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 40px;
`;

export const ProductStyles = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  img {
    width: 250px;
    border-radius: 15px;
  }
  h3 {
    text-align: center;
  }
`;

// export const ProductsH3Styles = styled.h3`
//   text-align: center;
// `;

export const ProductsInfoStyles = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: 900;
  }
`;

export const ProductsBtnStyles = styled(motion.button)`
  color: white;
  background-color: var(--text-nav);
  border: var(--text-nav);
  width: 100px;
  padding: 7px 0px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
`;

export const MjeConteniner = styled.div``;
