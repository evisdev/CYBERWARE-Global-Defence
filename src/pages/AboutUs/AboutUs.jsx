import React from "react";
import Header from "./components/Header/Header";
import OurMission from "./components/OurMission/OurMission";
import Locations from "./components/Locations/Locations";
import Founders from "./components/Founders/Founders";
import Specialists from "./components/Specialists/Specialists";
import Advisors from "./components/Advisors/Advisors";
import Certifications from "./components/Certfications/Certifications";
import OurClients from "./components/OurClients/OurClients";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <OurMission />
      <Locations />
      <Founders/>
      <Specialists/>
      <Advisors/>
      <Certifications/>
      <OurClients/>
    </div>
  );
};

export default AboutUs;