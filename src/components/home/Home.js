import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThre from "./SectionThre";
import SectionFour from "./SectionFour";
import ClassesList from "../classes/ClassesList";
import ScrollToTop from "../Scroll/ScrollTop";
const Home = ({ showSignupPage }) => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThre />

      {showSignupPage ? <ClassesList /> : <SectionFour />}
      <ScrollToTop />
    </div>
  );
};

export default Home;
