"use strict";

import _ from "lodash";
import printMe from "./print.js";

const component = () => {
  let element = document.createElement("div");
  let btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
};

document.body.appendChild(component());
