import "./navi.module.css";
import { useState } from "react";
import style from "./navi.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [position, setPosition] = useState(42);
  const [highlightedTask, setHighlightedTask] = useState(1);

  const handleMouseClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPosition(rect.left - 100);
    const taskIndex = parseInt(e.target.dataset.index);
    setHighlightedTask(taskIndex);
  };

  return (
    <div>
      <div className={style.tasks}>
        <Link to={"/toolika"}>
          <div
            className={`${style.task} ${
              highlightedTask === 1 ? style.highlighted : ""
            }`}
            data-index="1"
            onClick={handleMouseClick}
          >
            Toolika
          </div>
        </Link>
        <Link to={"/samwaad"}>
          <div
            className={`${style.task} ${
              highlightedTask === 2 ? style.highlighted : ""
            }`}
            data-index="2"
            onClick={handleMouseClick}
          >
            Samwaad
          </div>
        </Link>
        <Link to={"/natraj"}>
          <div
            className={`${style.task} ${
              highlightedTask === 3 ? style.highlighted : ""
            }`}
            data-index="3"
            onClick={handleMouseClick}
          >
            Natraj
          </div>
        </Link>
        <Link to={"/mirage"}>
          <div
            className={`${style.task} ${
              highlightedTask === 4 ? style.highlighted : ""
            }`}
            data-index="4"
            onClick={handleMouseClick}
          >
            Mirage
          </div>
        </Link>
        <Link to={"/enquizta"}>
          <div
            className={`${style.task} ${
              highlightedTask === 5 ? style.highlighted : ""
            }`}
            data-index="5"
            onClick={handleMouseClick}
          >
            Enquizta
          </div>
        </Link>
        <Link to={"/crosswindz"}>
          <div
            className={`${style.task} ${
              highlightedTask === 6 ? style.highlighted : ""
            }`}
            data-index="6"
            onClick={handleMouseClick}
          >
            Crosswindz
          </div>
        </Link>
        <Link to={"/abhinay"}>
          <div
            className={`${style.task} ${
              highlightedTask === 7 ? style.highlighted : ""
            }`}
            data-index="7"
            onClick={handleMouseClick}
          >
            Abhinay
          </div>
        </Link>

        <Link to={"/captureit"}>
          <div
            className={`${style.task} ${
              highlightedTask === 8 ? style.highlighted : ""
            }`}
            data-index="8"
            onClick={handleMouseClick}
          >
            Caputre it
          </div>
        </Link>
      </div>
      <div className={style.slider_track}>
        <div className={style.slider_pointer} style={{ left: position }} />
      </div>
    </div>
  );
};

export default Slider;
