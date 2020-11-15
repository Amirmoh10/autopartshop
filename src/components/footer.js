import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Avatar from "@material-ui/core/Avatar";
import webLogo from "../img/webLogo.png";
import photo from "../img/photo.png";

const avatarStyle = {
  backgroundColor: "#333333",
};

function Footer() {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="footer1">
          <div className="footerLogoBox">
            <img
              alt=""
              src={webLogo}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="textWissem">Sale of original auto spare parts</div>
          <div className="socialMedia">
            <Avatar style={avatarStyle}>
              <FacebookIcon />
            </Avatar>
            <Avatar style={avatarStyle}>
              <TwitterIcon />
            </Avatar>
            <Avatar style={avatarStyle}>
              <LinkedInIcon />
            </Avatar>
            <Avatar style={avatarStyle}>
              <EmailIcon />
            </Avatar>
          </div>
        </div>
        <div className="customerService">
          <p className="customerServiceTitle">Customer Services</p>
          <p className="contactText">Contact Us</p>
          <p>Terms And Conditions</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Delivery Information</p>
        </div>

        <div className="testimonial">
          <p className="testimonialTitle">Testimonial</p>
          <div className="testimonialBox">
            <div className="testimonialImageBox">
              <img
                alt=""
                src={photo}
                style={{ height: "100%", width: "100%", borderRadius: "100%" }}
              />
            </div>
            <p>Ghezala Amir</p>
          </div>
          <p>
            "A reliable store that provided me with original spare parts
            everytime i needed"{" "}
          </p>
        </div>
      </div>
      <div className="lowerFooter">
        <p>Copyright © 2020 Ghezala All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
