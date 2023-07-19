import styled from "styled-components";

export const ContactsSectionContainerStyles = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 70px 30px;
  width: 100%;
  flex-wrap: wrap;
  gap: 40px;
  color: white;
  background-color: var(--text-nav);
`;

export const ContactsContainerInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const ContactsTextStyles = styled.p`
  font-size: 16px;

  gap: 220px;
`;

export const ContactsTitleStyles = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

export const ContactsContainerIframeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  width: 400px;
  border-radius: 10px;

  @media (max-width: 665px) {
    height: 250px;
    width: 200px;
  }
`;
