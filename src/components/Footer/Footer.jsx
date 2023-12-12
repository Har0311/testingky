import React from "react";
import YouTube from "react-youtube";
import Style from "./Footer.module.css";
import kylogo from "../../assets/ky-logo.png";
import ytbLogo from "../../assets/ytb-logo.png";
import xLogo from "../../assets/x-logo.png";
import instaLogo from "../../assets/meta-logo.png";
import linkLogo from "../../assets/lin-logo.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    const options = {
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    const scrollToPageone = () => {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    };

    const scrollToBrowniePoint = () => {
      window.scrollTo({
        top: 3400,
        behavior: "smooth",
      });
    };

    return (
      <div className={Style.container}>
        <div className={Style.content}>
          <div className={Style.logo}>
            <img src={kylogo} alt="" />
          </div>
          <div className={Style.contentB}>
            <div className={Style.contentB1}>
              <Link to={"/"}>
                <h3>Home</h3>
              </Link>
              <Link to={""} onClick={scrollToBrowniePoint}>
                <h5>Brownie Points</h5>
              </Link>
              <Link to={""} onClick={scrollToPageone}>
                <h5>Become CA</h5>
              </Link>
            </div>
            <div className={Style.contentB2}>
              <Link to={""}>
                <h3>Features</h3>
              </Link>
              <Link to={"/"}>
                <h5>Terms and condition</h5>
              </Link>
              <Link to={"/"}>
                <h5>Privacy and policy</h5>
              </Link>
            </div>
          </div>
          <div className={Style.contentSocial}>
            <div className={Style.imagee}>
              <Link to={"https://www.instagram.com/kashiyatra_iitbhu/"}>
                <img src={instaLogo} alt="" />
              </Link>
            </div>
            <div className={Style.imagee}>
              <Link to={"https://www.linkedin.com/company/kashiyatra-iitbhu/"}>
                <img src={linkLogo} alt="" />
              </Link>
            </div>
            <div className={Style.imagee}>
              <Link to={"https://twitter.com/KY_IITBHU"}>
                <img src={xLogo} alt="" />
              </Link>
            </div>
            <div className={Style.imagee}>
              <Link to={"https://www.youtube.com/@KashiyatraIITBHU"}>
                <img src={ytbLogo} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={Style.Vcont}>
          <div className={Style.vi}>
            <YouTube
              videoId="4qjQGb3wqRI"
              options={options}
              onReady={this._onReady}
              id="video"
            />
          </div>
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Footer;
