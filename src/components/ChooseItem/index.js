import "./index.css";

const ChooseItem = (props) => {
  const { choiceDetails } = props;
  const { imageUrl, description, option } = choiceDetails;
  return (
    <li className="choose-card">
      <img src={imageUrl} alt={option} className="choose" />
      <h1 className="choose-heading">{option}</h1>
      <p className="description">{description}</p>
    </li>
  );
};

export default ChooseItem;
