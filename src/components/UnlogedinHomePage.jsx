import React from "react";
import AfterLogin from "./FetchingData/AfterLogin";
import BeforeLogin from "./FetchingData/BeforeLogin";

import UnlogedinNavbar from "./Navbar/NavbarBeforeLogin";

function UnlogedinHomePage() {
  return (
    <>
      <UnlogedinNavbar />
      <BeforeLogin />
    </>
  );
}

export default UnlogedinHomePage;
