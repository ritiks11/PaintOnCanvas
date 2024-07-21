import React from "react";
import {
  faArrowsAltH,
  faEraser,
  faMagic,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Toolbar = ({
  handleColor,
  handleBrush,
  handleEraser,
  isEraser,
  handleThickness,
}) => {
  return (
    <aside className="toolContainer">
      <p className="colorPickerText">
        choose your color!{" "}
        <FontAwesomeIcon icon={faArrowTurnDown} style={{ color: "white" }} />
      </p>
      <input type="color" className="colorPickerBox" onChange={handleColor} />
      <div className="tools">
        <p>
          Tools{" "}
          <FontAwesomeIcon icon={faArrowTurnDown} style={{ color: "white" }} />
        </p>
        <div className="toolBox">
          <div onClick={handleBrush}>
            <button>
              <FontAwesomeIcon icon={faPaintBrush} className="toolIcons" />
            </button>
            <span>Brush</span>
          </div>
          <div onClick={handleBrush}>
            <button>
              <FontAwesomeIcon icon={faSquareFull} className="toolIcons" />
            </button>
            <span>rectangle</span>
          </div>
          <div onClick={handleEraser}>
            <button>
              <FontAwesomeIcon icon={faEraser} className="toolIcons" />
            </button>
            <span className="text-lg font-semibold px-2 text-center w-full">
              Eraser
            </span>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-lg font-semibold">Brush Thickness</p>
        <div className="mt-2 w-full">
          <input
            type="range"
            min={10}
            max={100}
            defaultValue={25}
            onChange={handleThickness}
          ></input>
        </div>
      </div>
    </aside>
  );
};

export default Toolbar;
