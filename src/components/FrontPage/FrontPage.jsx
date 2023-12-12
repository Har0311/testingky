import React from "react";
import Style from "./FrontPage.module.css";
import { Link } from "react-router-dom";

export default function FrontPage() {

  return (
    <div className={Style.container}>
      <div className={Style.videoContainer}>
      <div className={Style.caContainer}>
        <div className={Style.headingText}>
          <h1>Become a Campus Ambassador</h1>
        </div>
        <div className={Style.caLines}>
          <p> Join us to become a campus ambassador and proudly represent our brand on your college campus.
          </p>
        </div>

        <div className={Style.applyBtn}>
          <Link to={"/ca-register"}>
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
        <video className={Style.VideoTag} autoPlay loop muted>
          <source src="https://i.imgur.com/jim03K9.mp4" type="video/mp4" />
          
        </video>

        <video className={Style.VideoTagmob} autoPlay loop muted>
          <source src="https://i.imgur.com/jim03K9.mp4" type="video/mp4" />
        </video>
      </div>
      
    </div>
  );
}
