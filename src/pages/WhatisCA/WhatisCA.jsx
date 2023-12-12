import React from "react";
import rectImg from "../../assets/Rectangle6.jpg";
import Style from "./WhatisCA.module.css";

export default function WhatisCA() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.stripContainer}>
          <div className={Style.stripText}>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>WHAT IS CA?</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>WHAT IS CA?</h3>
            </div>
          </div>
        </div>
        <div className={Style.content}>
          <div className={Style.textContent}>
            <div className={Style.heading}>
              <h3>What Is Campus Ambassador?</h3>
            </div>
            <div className={Style.para}>
              <p>
                Kashiyatra Offers You The Chance To Represent And Promote The
                Festival At Your Colleges And Universites! Campus Ambassadors
                Get A Chance To Be An Extended Part Of The Organising Team Of
                Kashiyatra'24. All You Have To Do Is Lead The Contingent From
                Your College Taking Part In KY And Make Sure That People In Your
                Institute Know About It. Be The Leader In A Crowd Of Followers!
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
