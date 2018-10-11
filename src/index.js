"use strict";

import _ from "lodash";
import "./style.css";
import Icon from "./damitall.jpeg";
import Data from "./data.xml";

const component = () => {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
};

document.body.appendChild(component());
