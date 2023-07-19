import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 70px 0px;
  background-color: var(--background);
`;

export const HeroContanerImgStyled = styled.div`
  display: flex;
  background-image: url("https://res.cloudinary.com/djvnzpw39/image/upload/v1686868015/hero-fondo_ruk2sy.png");
  width: 95%;
  border-radius: 20px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const HeroContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  /* z-index: 5; */
  background: no-repeat;
  h1 {
    font-size: 40px;
    font-weight: 500;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    background: no-repeat;
  }
  h1 span {
    font-weight: 600;
    background: no-repeat;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: var(--text-hero);
    padding: 30px 20px;
    width: 500px;
    background: no-repeat;
  }
  a {
    color: var(--text-nav);
    background-color: white;
    width: 150px;
    padding: 10px 10px;
    margin-left: 20px;
    margin-bottom: 10px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 800;
    text-align: center;
  }
  /* ::before {
    opacity: 0.5;
    z-index: -1;
  } */

  @media (max-width: 992px) {
    text-align: center;
    width: 90%;
    align-items: center;
    h1 {
      display: block;
      width: 100%;
    }
    p {
      max-width: 80%;
      font-size: 16px;
    }
    a {
      justify-content: center;
    }
    //ver img con display none
  }
  @media (max-width: 665px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }
`;
