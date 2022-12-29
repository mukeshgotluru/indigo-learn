import { Component } from "react";

import {
  FormContainer,
  Select,
  Option,
  InputField,
  RequestButton,
  FormHeading,
  Container,
  CourseDescription,
  CourseHeading,
  Course,
  LearningButton,
  LearningPara,
  Span
} from "./styledComponents";

const interestedList = [
  {
    id: 1,
    option: "Interested In",
  },
  {
    id: 2,
    option: "ACCA Level |",
  },
  {
    id: 3,
    option: "ACCA Level ||",
  },
  {
    id: 4,
    option: "ACCA Level |||",
  },
];

const qualificationList = [
  {
    id: 1,
    option: "Qualification",
  },
  {
    id: 2,
    option: "CA",
  },
  {
    id: 3,
    option: "Bcom",
  },
  {
    id: 4,
    option: "CS",
  },
  {
    id: 5,
    option: "CMA",
  },
  {
    id: 6,
    option: "Other",
  },
];

class KickOf extends Component {
  state = {
    numberInput: "",
    emailInput: "",
    activeQualificationId: qualificationList[0].id,
    activeInterestId: interestedList[0].id,
  };

  onChangeNumber = (event) => {
    this.setState({ numberInput: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  onChangeActiveQualification = (event) => {
    this.setState({ activeQualificationId: event.target.value });
  };

  onChangeActiveInterest = (event) => {
    this.setState({ activeInterest: event.target.value });
  };

  renderNumberField = () => {
    const { numberInput } = this.state;
    return (
      <>
        <InputField
          type="text"
          placeholder="Phone Number"
          value={numberInput}
          onChange={this.onChangeNumber}
        />
      </>
    );
  };

  renderEmailField = () => {
    const { emailInput } = this.state;
    return (
      <>
        <InputField
          type="email"
          placeholder="Email ID"
          value={emailInput}
          onChange={this.onChangeEmail}
        />
      </>
    );
  };

  renderQualificationField = () => {
    const { activeQualificationId } = this.state;
    return (
      <>
        <Select
          value={activeQualificationId}
          onChange={this.onChangeActiveQualification}
        >
          {qualificationList.map((eachQualification) => (
            <Option key={eachQualification.id} value={eachQualification.id}>
              {eachQualification.option}
            </Option>
          ))}
        </Select>
      </>
    );
  };

  renderInterestField = () => {
    const { activeInterestId } = this.state;
    return (
      <>
        <Select value={activeInterestId} onChange={this.onChangeActiveInterest}>
          {interestedList.map((eachInterest) => (
            <Option key={eachInterest.id} value={eachInterest.id}>
              {eachInterest.option}
            </Option>
          ))}
        </Select>
      </>
    );
  };

  renderForm = () => (
    <>
      <FormContainer>
        <FormHeading>Aspiring to be an ACCA? Get in touch with us!</FormHeading>
        <div>{this.renderNumberField()}</div>
        <div>{this.renderEmailField()}</div>
        <div>{this.renderQualificationField()}</div>
        <div>{this.renderInterestField()}</div>
        <div>
          <RequestButton type="submit">Request Call Back</RequestButton>
        </div>
      </FormContainer>
    </>
  );
  render() {
    return (
      <Container>
        <Course>
          <CourseHeading>
            Kick off your ACCA Prep journey with IndigoLearn
          </CourseHeading>
          <CourseDescription>
            Sign-in and get instant access to our Free Courses
          </CourseDescription>
          <LearningButton>
          <LearningPara>SILVER LEARNING PARTNER</LearningPara>
          <Span>ACCA</Span>
        </LearningButton>
        </Course>
        {this.renderForm()}
      </Container>
    );
  }
}

export default KickOf;
