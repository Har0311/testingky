import React from "react";
import style from "./EveLogin.module.css";
import upperline from "../../assets/EventPagesAssets/upperformele.png";
import lowerline from "../../assets/EventPagesAssets/lowerformele.png";
import EventImg from "../../assets/EventPagesAssets/EventImg.png";
import { Link } from "react-router-dom";

function EveLogin() {
  return (
    <>
      <div className={style.main}>
        <div className={style.mainCont}>
          <div className={style.divOne}>
            <div className={style.divOneImgup}>
              <img src={upperline} alt="" />
            </div>
            <div>
              <h1>INK IT</h1>
            </div>
            <div>
              <h3>Individual Event</h3>
            </div>
            <div className={style.divOneEveImg}>
              <img src={EventImg} alt="" />
            </div>
            <div className={style.divOneImgdown}>
              <img src={lowerline} alt="" />
            </div>
          </div>
          <div className={style.divTwo}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              reiciendis, id, quas sequi adipisci ea est corrupti dolores non
              accusamus veniam, tempora impedit. Exercitationem molestiae
              reprehenderit minima. Sapiente, itaque alias.
            </p>
          </div>
          <div className={style.divThree}>
            <button>Login</button>
          </div>
          <div className={style.dottedLine}>
            <hr />
          </div>
          <div className={style.divFour}>
            <Link to={"/"}>
              <button>Close</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EveLogin;
