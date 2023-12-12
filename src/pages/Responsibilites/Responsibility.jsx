import React from "react";
import rectImg from "../../assets/Rectangle7.jpg";
import Style from "./Responsibility.module.css";

export default function Responsibilty() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.stripContainer}>
          <div className={Style.stripText}>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>RESPONSIBILITIES</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>RESPONSIBILITIES</h3>
            </div>
          </div>
        </div>
        <div className={Style.content}>
          <div className={Style.textContent}>
            <div className={Style.heading}>
              <h3>Responsibilities As Campus Ambassador</h3>
            </div>
            <div className={Style.para}>
              <p>
                Campus Ambassador Is The Face Of Kashiyatra. They Act As The
                Link Between Kashiyatra And Their College And Are The First
                Point Of Contact For The Students. Following Are The
                Responsibilites One Is Required To Take :
              </p>
              <p>
                <strong>Represent: </strong>Represent And Exemplify Kashiyatra
                In Your College Among Your Peers.
              </p>

              <p>
                <strong>Publicize:</strong> Promote Kashiyatra By Publicizing
                Its Events Through Social Media Platforms.
              </p>
              <p>
                <strong>Conceptualize</strong> Bring Forth Ideas And Proposals
                As Valuable Input For Team Kashiyatra.
              </p>
              <p>
                <strong>Organize:</strong> Conduct Workshops And Promotional
                Events In Your College For Kashiyatra.
              </p>
            </div>
          </div>
          <div className={Style.imageContent}>
            <img src={rectImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
