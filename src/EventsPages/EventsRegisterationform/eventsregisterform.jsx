import React, { useState } from "react";
import style from "./eventsregisterform.module.css";

function EveLogin() {
  const [formData, setFormData] = useState({
    TeamLeader: "",
    MemberOne: "",
    MemberTwo: "",
    MemberThree: "",
    MemberFour: "",
    MemberFive: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.mainCont}>
          <form className={style.divOne} action="/register" method="post">
            <div className={style.boxx}>
              <label>
                <strong>Team Leader Name</strong>
              </label>
              <input
                type="text"
                id="name"
                name="TeamLeader"
                onChange={handleChange}
                placeholder="Type Your Name"
              />
            </div>
            <div className={style.boxx}>
              <label>
                <h3>Team Member 1 Name</h3>
              </label>
              <input
                type="text"
                id="name-1"
                onChange={handleChange}
                name="MemberOne"
                placeholder="Type Your Name"
              />
            </div>
            <div className={style.boxx}>
              <label>
                <h3>Team Member 2 Name</h3>
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="name-2"
                name="MemberTwo"
                placeholder="Type Your Name"
              />
            </div>
            <div className={style.boxx}>
              <label>
                <h3>Team Member 3 Name</h3>
              </label>
              <input
                type="text"
                id="name-3"
                onChange={handleChange}
                name="MemberThree"
                placeholder="Type Your Name"
              />
            </div>
            <div className={style.boxx}>
              <label>
                <h3>Team Member 4 Name</h3>
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="name-4"
                name="MemberFour"
                placeholder="Type Your Name"
              />
            </div>
            <div className={style.boxx}>
              <label>
                <h3>Team Member 5 Name</h3>
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="name-5"
                name="MemberFive"
                placeholder="Type Your Name"
              />
            </div>
          </form>
          <div className={style.divThree}>
            <button type="sbmit" value={"Submit"}>
              Submit
            </button>
          </div>
          <div className={style.dottedLine}>
            <hr />
          </div>
          <div className={style.divFour}>
            <button>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EveLogin;
