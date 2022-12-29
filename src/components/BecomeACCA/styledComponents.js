import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 25px;
  margin-bottom: 20px;
  background-color: #f1f8fe;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
`;

export const MainHeading = styled.h1`
  font-size: 36px;
  font-family: Roboto;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  width: 400px;
  height: 350px;
  margin-top: 50px;
  border-top: 2px solid #32127a;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
  margin-left: 50px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const DetailContainer = styled.div`
  width: 50%;
  padding: 15px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 20px;
  }
`;

export const DetailsCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    border: 1px solid #000;
    justify-content: center;
    display: none;
  }
`;
export const Heading = styled.p`
  font-size: 14px;
  padding-left: 8px;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DetailsCard = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  margin-right: 35px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  line-height: 0;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`;

export const Count = styled.p`
  font-size: 16px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FormHeading = styled.h1`
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
`;

export const InputField = styled.input`
  height: 30px;
  width: 90%;
  padding: 5px;
  margin-top: 15px;
  outline: none;
`;

export const DownloadButton = styled.button`
  background-color: #32127a;
  color: #ffffff;
  font-family: Roboto;
  width: 250px;
  height: 40px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  margin-right: 25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LearningButton = styled.div`
  background-color: red;
  color: #ffffff;
  font-family: Roboto;
  height: 40px;
  width: 200px;
  outline: none;
  border: none;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const LearningPara = styled.p`
  text-align: center;
`;

export const Span = styled.p`
  border: 1px solid #ffffff;
  width: 45px;
  height:40px
  padding: 2px;
  margin-left: 8px;
  color: #ffffff;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Select = styled.select`
  height: 40px;
  width: 94%;
  padding: 5px;
  margin-top: 15px;
  font-family: Roboto;
`;

export const Option = styled.option`
  padding: 10px;
  font-size: 18px;
  font-family: Roboto;
`;

export const RequestButton = styled.button`
  background-color: #32127a;
  color: #ffffff;
  outline: none;
  border: none;
  font-size: 18px;
  width: 95%;
  height: 38px;
  padding: 5px;
  border-radius: 5px;
  padding-left: 15px;
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  text-transform: none;
`;

export const Register = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
