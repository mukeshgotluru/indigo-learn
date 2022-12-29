import Header from "./components/Header";
import BecomeACCA from "./components/BecomeACCA";
import ChooseUs from "./components/ChooseUs";
import ACCAEligibility from "./components/ACCAEligibility";
import LearnACCA from "./components/LearnACCA";
import Placement from "./components/Placement";
import KickOf from "./components/KickOf";

import "./App.css";

const App = () => (
  <div className="app-container">
    <Header />
    <BecomeACCA />
    <ChooseUs />
    <ACCAEligibility />
    <LearnACCA />
    <Placement />
    <KickOf />
  </div>
);

export default App;
