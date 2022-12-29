import {RiAccountCircleFill} from "react-icons/ri"
import "./index.css";

const Header = () => (
  <div className="header">
    <h1 className="heading">IndigoLearn</h1>
    <ul className="list">
      <li className="link">BUY COURSES</li>
      <li className="link">BUY BOOKS</li>
      <li className="link">PROGRAMS</li>
      <li className="link">FREE RESOURCES</li>
    </ul>
    <button>
    <RiAccountCircleFill className="icon"/>
    Log In/Sign Up</button>
  </div>
);

export default Header;
