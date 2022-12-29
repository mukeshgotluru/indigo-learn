import styled from "styled-components";

export const LearnContainer = styled.div`
  padding: 25px;
`;

export const LearnHeading = styled.h1`
  text-align: center;
  font-size: 34px;
`;

export const Hr = styled.hr`
  border: 2px solid #32127a;
  text-align: center;
  width: 80px;
`;

export const LevelContainer = styled.div`
  padding: 10px;
  display: flex;
  @media screen and (max-width: 786px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LevelCard = styled.div`
  width: 400px;
  padding: 15px;
`;

export const LevelHeading = styled.h1`
  background-color: #321270;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  height: 40px;
  padding: 10px;
`;

export const UnorderedList = styled.ul`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  text-align: center;
  line-height: 1.5;
`;
