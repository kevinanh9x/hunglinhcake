import React, { useState } from "react";
import "./_index.scss";
import HungLinHeader from "../common/Header/Header";
import FooterHungLinh from "../common/Footer/Footer";
import HungLinhContent from "../common/Content/Content";

const Home = (props) => {
  return (
    <div className="wrapper">
      <HungLinHeader />
      <HungLinhContent />
      <FooterHungLinh />
    </div>
  );
};

export default Home;
