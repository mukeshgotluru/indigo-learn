import styled from "styled-components";

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

export const InputField = styled.input`
  height: 30px;
  width: 90%;
  padding: 5px;
  margin-top: 15px;
  outline: none;
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

export const FormHeading = styled.h1`
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
`;

export const Container = styled.div`
  margin: 25px;
  padding: 15px;
  display: flex;
  justify-content: center;
  background-color: #f2edff;
  @media screen and (max-width:768px) {
      flex-direction:column;
  }
`;

export const CourseDescription = styled.p`
  font-size: 16px;
`;

export const CourseHeading = styled.h1`
  font-size: 24px;
`;

export const Course = styled.div`
  padding: 15px;
  margin-top: 25px;
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
