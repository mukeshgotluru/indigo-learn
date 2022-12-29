import { MdOutlineMenuBook } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { BsLaptop, BsCalendarCheck } from "react-icons/bs";

import {
  CardsContainer,
  Card,
  CardHeading,
  TextContainer,
  Duration,
} from "./styledComponents";

const ACCAEligibility = () => (
  <CardsContainer>
    <Card>
      <CardHeading>Levels</CardHeading>
      <TextContainer>
        <MdOutlineMenuBook className="icon" />
        <Duration>Three (13 papers)</Duration>
      </TextContainer>
    </Card>
    <Card>
      <CardHeading>Duration</CardHeading>
      <TextContainer>
        <GiAlarmClock className="icon" />
        <Duration>6-30 months</Duration>
      </TextContainer>
    </Card>
    <Card>
      <CardHeading>Levels</CardHeading>
      <TextContainer>
        <BsLaptop className="icon" />
        <Duration>Quarterly (Online)</Duration>
      </TextContainer>
    </Card>
    <Card>
      <CardHeading>Levels</CardHeading>
      <TextContainer>
        <BsCalendarCheck className="icon" />
        <Duration>Upto 9 papers</Duration>
      </TextContainer>
    </Card>
  </CardsContainer>
);

export default ACCAEligibility;
