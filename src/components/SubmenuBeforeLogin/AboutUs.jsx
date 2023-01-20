import React from "react";

import ImgPerpus from "../../assets/img/img-perpus.jpg";
import UnlogedinNavbarMain from "../Navbar/NavbarBeforeLogin";
import "./Submenu.css";

function aboutUs() {
  return (
    <>
      <UnlogedinNavbarMain />
      <div className="body-submenu">
        <center>
          <div>
            <h4>
              <b>
                <i>About Us</i>
              </b>
            </h4>
          </div>
        </center>
        {/* <img src={ImgPerpus} className="img-submenu"/>C */}
        <div className="card" id="card-deskripsi">
          <div className="card-body">
            <a>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat."
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutUs;
