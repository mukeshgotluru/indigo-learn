import {
  LearnContainer,
  LearnHeading,
  Hr,
  LevelContainer,
  LevelCard,
  LevelHeading,
  UnorderedList,
  Li,
} from "./styledComponents";

const LearnACCA = () => (
  <LearnContainer>
    <LearnHeading>What will you learn in ACCA?</LearnHeading>
    <Hr />
    <LevelContainer>
      <LevelCard>
        <LevelHeading>Knowledge Level</LevelHeading>
        <UnorderedList>
          <Li>Business abn Technology (BT)</Li>
          <Li>Management Accounting (MA)</Li>
          <Li>Financial Accounting (FA)</Li>
        </UnorderedList>
        <LevelHeading>3 papers</LevelHeading>
      </LevelCard>
      <LevelCard>
        <LevelHeading>Skill Level</LevelHeading>
        <UnorderedList>
          <Li>Corporate and Business Law (LW)</Li>
          <Li>Performance Management (PM)</Li>
          <Li>Taxation (TX)</Li>
        </UnorderedList>
        <LevelHeading>6 papers</LevelHeading>
      </LevelCard>
      <LevelCard>
        <LevelHeading>Professional Level</LevelHeading>
        <UnorderedList>
          <Li>Advanced Financial Management (AFM)</Li>
          <Li>Advanced Performance Management (APM)</Li>
          <Li>Advanced Taxation (ATX)</Li>
        </UnorderedList>
        <LevelHeading>6 papers</LevelHeading>
      </LevelCard>
    </LevelContainer>
  </LearnContainer>
);

export default LearnACCA;
