import styled from "styled-components";

export const AboutsSectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 70px 20px;
  gap: 20px;
  background-color: var(--background);

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
  }
`;

export const AboutsContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
  gap: 100px;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const AboutsCardStyles = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  gap: 30px;
  max-width: 300px;

  @media (max-width: 665px) {
    p {
      font-size: 14px;
    }
  }
`;

export const AboutsH2Styles = styled.h2`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 665px) {
    font-size: 26px;
  }
`;

// export const AboutsTextStyles = styled.p``;
