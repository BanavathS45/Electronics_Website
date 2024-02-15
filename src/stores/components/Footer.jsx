import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4  col-sm-12">
            <ul className="list-items">
              <Link to="/">HOME</Link>
              <Link>ABOUT</Link>
              <Link>CONTACT</Link>
              <Link>SUGGESTION</Link>
              <div className="socail-links">
                <Link
                  to={"https://www.facebook.com"}
                  target="_blank"
                  title="Face Book"
                  style={{ color: "#3B5998" }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                </Link>
                <Link
                  to={"https://www.youtube.com"}
                  target="_blank"
                  title="Youtube"
                  style={{ color: "#FF3333" }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faYoutubeSquare}></FontAwesomeIcon>
                </Link>
                <Link
                  to={"https://www.linkedin.com"}
                  target="_blank"
                  title="Linked In"
                  style={{ color: "#4875B4" }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </Link>
                <Link
                  to={"https://www.twitter.com"}
                  target="_blank"
                  title="Twitter"
                  style={{ color: "#1BAAE1" }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                </Link>
              </div>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-12  apps">
            <h3>download App</h3>
            <div className="apps">
              <img src="./app1.png" alt="" width={"50%"} />
              <img src="./app2.png" alt="" width={"50%"} />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 ">
            <ul className="list-items">
              <Link>MOBILES</Link>
              <Link>COMPUTERS</Link>
              <Link>ELECTRONICS</Link>
              <Link>MENS WARE</Link>
              <Link>KIDS WARE</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
