import React from "react";
import style from "./frontlandpage.module.css";
import kyImg2 from "./Kashiyatraamain.png";
import Aboutus from "../Aboutus/About";
import { ScrollRotate } from "react-scroll-rotate";

import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";

function frontlandpage() {
  const [scale, setScale] = useState(1);
  const headerRef = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const newScale = Math.max(0.5, 1 - scrollY / 800); // Adjust the divisor based on your desired sensitivity
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={style.background_container}>
        <div className={style.section}>
          <div className={style.img2}>
            <ScrollRotate>
              <img
                ref={headerRef}
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.07s ease-in-out",
                }}
                src={kyImg2}
                alt=""
              />
            </ScrollRotate>
          </div>

          <div
            className={style.content}
            ref={headerRef}
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.07s ease-in-out",
            }}
          >
            <div
              className={style.heading}

              // style={{ transform: `scale(${scale})` }}
            >
              <h1>KASHIYATRA&apos;24</h1>
            </div>
            <div className={style.text}>
              <h3>Cadence Kaleidoscope: Old Soul, New Groove.</h3>
            </div>

            <div className={style.status}>
              <div className={style.lineOne}>
                <hr />
              </div>
              <div className={style.statusentered}>
                <h2>Registrations Opened</h2>
              </div>
              <div className={style.lineTwo}>
                <hr />
              </div>
            </div>

            <div className={style.btn}>
              <button>Register Now</button>
            </div>

            <div className={style.lastRow}>
              <span>Already Registered ?</span>
              <a href="#">
                <strong>Login</strong>
              </a>
            </div>
          </div>
        </div>

        <div className={style.section}>
          <Aboutus />
        </div>
      </div>
    </>
  );
}

export default frontlandpage;
