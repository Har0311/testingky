import React from "react";
import Style from "./BrowniePoint.module.css";
import Celeb from "../../assets/celeb.png";
import Pass from "../../assets/passes.png";
import Prize from "../../assets/prizes.png";
import Merch from "../../assets/merch.png";
import Certificate from "../../assets/certificates.png";

export default function BrowniePoint() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.stripContainer}>
          <div className={Style.stripText}>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper1}>
              <h3 className={Style.textone}>BROWNIE POINTS</h3>
            </div>
            <div className={Style.stripper2}>
              <h3 className={Style.textsec}>BROWNIE POINTS</h3>
            </div>
          </div>
        </div>
        <div className={Style.content}>
          <div className={Style.item}>
            <div className={Style.image}>
              <img src={Pass} alt="" />
            </div>
            <div className={Style.labeling}>
              <h4>Free Event Access</h4>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.image}>
              <img src={Prize} alt="" />
            </div>
            <div className={Style.labeling}>
              <h4>Prizes</h4>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.image}>
              <img src={Certificate} alt="" />
            </div>
            <div className={Style.labeling}>
              <h4>Certificates</h4>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.image}>
              <img src={Celeb} alt="" />
            </div>
            <div className={Style.labeling}>
              <h4>Celebrity Meets</h4>
            </div>
          </div>
          <div className={Style.item}>
            <div className={Style.image}>
              <img src={Merch} alt="" />
            </div>
            <div className={Style.labeling}>
              <h4>Merchandise</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
