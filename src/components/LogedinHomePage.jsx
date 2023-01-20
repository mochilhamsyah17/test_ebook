import React from "react";
import AfterLogin from "./FetchingData/AfterLogin";
import BeforeLogin from "./FetchingData/BeforeLogin";

import NavbarMain from "./Navbar/NavbarMain";

function homePage() {
  return (
    <>
      <NavbarMain />
      <AfterLogin />
    </>
  );
}

export default homePage;
