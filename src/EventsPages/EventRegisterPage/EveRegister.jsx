import React from "react";
import style from "../../EventsPages/EventLoginform/EveLogin.module.css";
import upperline from "../../assets/EventPagesAssets/upperformele.png";
import lowerline from "../../assets/EventPagesAssets/lowerformele.png";
import EventImg from "../../assets/EventPagesAssets/EventImg.png";
import { Link, useLocation } from "react-router-dom";
import eventData from "../Datafiles/event.json";

function EveLogin() {
  const location = useLocation();
  const { eventImg, eventName, eventDetails } = location.state();

  return (
    <>
      <div className={style.main}>
        <div className={style.mainCont}>
          <div className={style.divOne}>
            <div className={style.divOneImgup}>
              <img src={upperline} alt="" />
            </div>
            <div>
              <h1>{eventName}</h1>
            </div>
            <div>
              {/* <h3>{maxMembers == 1 ? "Individual Event" : "Team Event"}</h3> */}
            </div>
            <div className={style.divOneEveImg}>
              <img src={eventImg} alt="" />
            </div>
            <div className={style.divOneImgdown}>
              <img src={lowerline} alt="" />
            </div>
          </div>
          <div className={style.divTwo}>
            <p>{eventDetails}</p>
          </div>
          <div className={style.divThree}>
            <Link to={"/eventsregisterationform"}>
              <button>Register</button>
            </Link>
          </div>
          <div className={style.dottedLine}>
            <hr />
          </div>
          <div className={style.divFour}>
            <Link to={"/eventregister"}>
              <button>Close</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EveLogin;
