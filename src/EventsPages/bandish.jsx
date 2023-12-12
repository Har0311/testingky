import React from "react";
import style from "./Toolika/toolika.module.css";
import { Link } from "react-router-dom";
import eventData from "./Datafiles/event.json";
import Navi from "./navigate/navi";

function toolika() {
  const bandishEvents = eventData.BANDISH || [];
  return (
    <>
      <Navi />
      <div className={style.container}>
        <div className={style.cardsBox}>
          {bandishEvents.map((event) => (
            <div key={event.eventId} className={style.card}>
              <div className={style.over}>
                <img className={style.overImgg} src={event.image_URL} alt="" />
              </div>
              <div className={style.content}>
                <div className={style.Nam}>
                  <h1>{event.eventName}</h1>
                </div>
                <div className={style.about}>
                  <p>{event.eventDetails.substring(0, 100)}...</p>
                </div>
                <div className={style.last}>
                  <Link to={`/eventslogin`}>
                    <button>Learn More</button>
                  </Link>
                </div>
              </div>
              <div className={style.lastOver}>
                <div className={style.overlayText}>
                  <h1>
                    {event.maxMembers == 1 ? "Individual Event" : "Team Event"}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default toolika;
