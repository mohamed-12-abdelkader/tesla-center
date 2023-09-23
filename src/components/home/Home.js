import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThre from "./SectionThre";
import SectionFour from "./SectionFour";
import Classes from "../Classes/Classes";
const Home = ({ showSignupPage }) => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThre />
      {!showSignupPage ? <SectionFour /> : <Classes />}
    </div>
  );
};

export default Home;
