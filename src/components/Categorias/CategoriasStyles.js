import styled from "styled-components";

import { motion } from "framer-motion";

export const CategoriesSectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: var(--background);
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
`;

export const CategoriesContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  background-color: var(--background);
  gap: 15px;

  @media (max-width: 665px) {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CategoryBtnStyles = styled(motion.button)`
  color: white;
  background-color: var(--text-nav);
  border: var(--text-nav);
  width: 120px;
  padding: 7px 0px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;

  background-color: ${({ selected }) =>
    selected ? "#1f618d" : "var(--text-nav)"};
  /* :hover {
    transform: scale(1.1);
  } */
  /* .active {
    background-color: #1f618d;
  } */
`;
