import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  border-top: 2px solid #32127a;
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    width: 180px;
    justify-content: center;
  }
`;

export const CardHeading = styled.p`
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Duration = styled.p`
  font-size: 16px;
  text-align: center;
  padding-left: 15px;
`;
