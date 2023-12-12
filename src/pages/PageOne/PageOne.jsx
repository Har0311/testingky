import React from "react";
import Style from "./PageOne.module.css";
import { Link } from "react-router-dom";

export default function PageOne() {
  return (
    <>
      <div className={Style.caContainer}>
        <div className={Style.headingText}>
          <h1>Become a Campus Ambassador</h1>
        </div>
        <div className={Style.caLines}>
          <p>
            Join us to become a campus ambassador and proudly represent our
            brand on your college campus.
          </p>
        </div>

        <div className={Style.applyBtn}>
          <Link to={"/ca-register"}>
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
