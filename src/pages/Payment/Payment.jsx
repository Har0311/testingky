import Style from "./Payment.module.css";
import React, { useState } from "react";

const Payment = () => {
  const userInfo = {};
  const [groupSize, setGroupSize] = useState(0);
  const [kyidInput, setKyidInput] = useState("");
  const [kyidList, setKyidList] = useState([]);

  const handleIncrement = () => {
    setGroupSize(groupSize + 1);
  };
  const handleDecrement = () => {
    if (groupSize > 1) setGroupSize(groupSize - 1);
  };
  const handleAddKyid = () => {
    if (kyidInput.trim() !== "" && !kyidList.includes(kyidInput)) {
      handleIncrement();
      setKyidList([...kyidList, kyidInput]);
      setKyidInput(""); // Clear the input field
    }
  };

  const handleRemoveKyid = (kyid) => {
    handleDecrement();
    const updatedList = kyidList.filter((item) => item !== kyid);
    setKyidList(updatedList);
  };

  return (
    <>
      {/* include navbar component here */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./images/favicon-32x32.png"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      <div>
        <header>
          <h1 style={{ fontSize: 35 }}>Payment</h1>
          <p style={{ fontSize: 12 }}>
            Customize and buy tickets per your preferences.
          </p>
        </header>
        <div className={Style.cards}>
          <div className={[Style.card, Style.shadow]}>
            <ul>
              <li className={Style.pack}>Registration Without Food</li>
              <li id="basic" className={[Style.price, Style.bottomBar]}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontSize: "0.5em",
                      opacity: 0.7,
                    }}
                  >
                    ₹ 2000
                  </span>
                  <span>₹ 1900</span>
                </div>
              </li>
              <li className={Style.bottomBar}> All Events Registration</li>
              <li className={Style.bottomBar}>
                {" "}
                All Pronite (Celeb Performance) Passes
              </li>
              <li className={Style.bottomBar}> Accomodation (Food Excluded)</li>
              <li className={Style.bottomBar}>
                {" "}
                Access to International Carnival
              </li>
              <li className={Style.bottomBar}> Free Official KY Tshirt!</li>
              <li>
                <a
                  href={`https://www.townscript.com/v2/e/e1-334021/booking?td-registration-without-food=1&name=${userInfo.name}&emailid=${userInfo.email}&cq1=${userInfo.kyid}`}
                  className={Style.btn}
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
          <div className={[Style.card, Style.active]}>
            <ul>
              <li className={Style.pack}>Registration With Food</li>
              <li id="basic" className={[Style.price, Style.bottomBar]}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontSize: "0.7em",
                      opacity: 0.7,
                    }}
                  >
                    ₹ 2500
                  </span>
                  <span>₹ 2300</span>
                </div>
              </li>
              <li className={Style.bottomBar}> All Events Registration</li>
              <li className={Style.bottomBar}>
                {" "}
                All Pronite (Celeb Performance) Passes
              </li>
              <li className={Style.bottomBar}> Accomodation with food</li>
              <li className={Style.bottomBar}>
                {" "}
                Access to International Carnival
              </li>
              <li className={Style.bottomBar}> Free Official KY Tshirt!</li>
              <li>
                <a
                  href={`https://www.townscript.com/v2/e/e1-334021/booking?td-registration-with-food=1&name=${userInfo.name}&emailid=${userInfo.email}&cq1=${userInfo.kyid}`}
                  className={[Style.btn, Style.activeBtn]}
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>

          <div className={[Style.card, Style.shadow, Style.custom]}>
            <ul>
              <li className={Style.pack}>Custom</li>
              <li id="master" className={[Style.price, Style.bottomBar]}>
                <span onClick={handleDecrement}> </span>
                {"₹ " + groupSize * 1900}
                <span onClick={handleIncrement}> </span>
              </li>

              <li>
                <input
                  type="text"
                  placeholder=" Add KY-ID "
                  value={kyidInput}
                  onChange={(e) => setKyidInput(e.target.value)}
                />
                <button
                  className={[Style.btn, Style.change]}
                  onClick={handleAddKyid}
                >
                  Add
                </button>
              </li>

              <li className={Style.ticketCnt}>
                <span>
                  {groupSize} {groupSize > 1 ? "Tickets" : "Ticket"}{" "}
                </span>
              </li>

              <li className={Style.bottomBar}>
                Enter the details of all attendees.
              </li>
              <li className={Style.bottomBar}>
                Verify that KY ID of all attendees entered correctly.
              </li>
              {/* all benefic */}
              <li>
                <div className={Style.kyidLists}>
                  {kyidList.map((kyid) => (
                    <span key={kyid} onClick={() => handleRemoveKyid(kyid)}>
                      {kyid}
                      {/* <span className="btn-remove"></span> */}
                    </span>
                  ))}
                </div>
              </li>

              <li>
                <a
                  href={`https://www.townscript.com/v2/e/e1-334021/booking/tickets`}
                  className={Style.btn}
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
