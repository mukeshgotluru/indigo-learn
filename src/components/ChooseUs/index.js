import ChooseItem from "../ChooseItem";

import { MainHeading } from "./styledComponents";

import "./index.css";

const choicelist = [
  {
    id: 1,
    imageUrl: "https://www.indigolearn.com/media/images/ca_concept.png",
    option: "Expert Faculty",
    description:
      "Our Faculty are subject matter expertise with practical experience. They believe in #StudentFirst principle",
  },
  {
    id: 2,
    imageUrl: "https://www.indigolearn.com/media/images/ca_top_faculties.png",
    option: "Complete Success Package",
    description:
      "Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests, Webinars.",
  },
  {
    id: 3,
    imageUrl: "https://www.indigolearn.com/media/images/ca_unlimited_views.png",
    option: "Placements",
    description:
      "Resume building workshops, mock interviews and placement drives will help you impress the top employers and get the dream job.",
  },
];

const ChooseUs = () => (
  <div className="section">
    <MainHeading>Why Choose Us?</MainHeading>
    <hr className="hr" />
    <ul className="choose-container">
      {choicelist.map((eachChoice) => (
        <ChooseItem key={eachChoice.id} choiceDetails={eachChoice} />
      ))}
    </ul>
  </div>
);

export default ChooseUs;
