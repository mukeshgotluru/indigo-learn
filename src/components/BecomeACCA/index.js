import { Component } from "react";

import { CgSmileMouthOpen } from "react-icons/cg";
import { MdOutlineMenuBook, MdPeople } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";

import {
  DetailContainer,
  MainContainer,
  MainHeading,
  FormContainer,
  Paragraph,
  DetailsCardContainer,
  DetailsCard,
  Heading,
  EmojiContainer,
  Count,
  FormHeading,
  InputField,
  DownloadButton,
  ButtonsContainer,
  LearningButton,
  LearningPara,
  Span,
  Image,
  ImageContainer,
  Select,
  Option,
  RequestButton,
  Register,
} from "./styledComponents";

import "./index.css";

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

class BecomeACCA extends Component {
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

  renderRegister = () => (
    <>
      <DetailsCardContainer>
        <DetailsCard>
          <EmojiContainer>
            <CgSmileMouthOpen className="icon" />
            <Heading>Registered Users</Heading>
          </EmojiContainer>
          <Count>249,022</Count>
        </DetailsCard>
        <DetailsCard>
          <EmojiContainer>
            <MdOutlineMenuBook className="icon" />
            <Heading>Courses Enrolled</Heading>
          </EmojiContainer>
          <Count>65,171</Count>
        </DetailsCard>
        <DetailsCard>
          <EmojiContainer>
            <BsPlayBtn className="icon" />
            <Heading>Minutes Watched</Heading>
          </EmojiContainer>
          <Count>2,090,935,459</Count>
        </DetailsCard>
        <DetailsCard>
          <EmojiContainer>
            <MdPeople className="icon" />
            <Heading>Faculty</Heading>
          </EmojiContainer>
          <Count>8 Experts</Count>
        </DetailsCard>
      </DetailsCardContainer>
      <ButtonsContainer>
        <DownloadButton>Download Brochure</DownloadButton>
        <LearningButton>
          <LearningPara>SILVER LEARNING PARTNER</LearningPara>
          <Span>ACCA</Span>
        </LearningButton>
      </ButtonsContainer>
    </>
  );

  renderAccaContainer = () => (
    <>
      <DetailContainer>
        <MainHeading>Become an ACCA in 18 months</MainHeading>
        <Paragraph>
          Acquire globally recognized accountancy qualification, ACCA (also
          called as Global CA), and get placed in top MNCs & Big4s. Begin ACCA
          prep with 1FIN now.
        </Paragraph>
        <ImageContainer>
          <Image
            src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg"
            alt="ACCA"
          />
        </ImageContainer>
        <div className="cards">{this.renderRegister()}</div>
      </DetailContainer>
    </>
  );

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
      <Register>{this.renderRegister()}</Register>
    </>
  );

  render() {
    return (
      <>
        <MainContainer>
          {this.renderAccaContainer()}
          {this.renderForm()}
        </MainContainer>
      </>
    );
  }
}

export default BecomeACCA;
