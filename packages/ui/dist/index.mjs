var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/NewTabLink.tsx
import * as React from "react";
var NewTabLink = (_a) => {
  var _b = _a, {
    children,
    href
  } = _b, other = __objRest(_b, [
    "children",
    "href"
  ]);
  return /* @__PURE__ */ React.createElement("a", __spreadValues({
    target: "_blank",
    rel: "noreferrer",
    href
  }, other), children);
};

// src/CounterButton.tsx
import * as React2 from "react";
var CounterButton = () => {
  const [count, setCount] = React2.useState(0);
  return /* @__PURE__ */ React2.createElement("div", {
    style: {
      background: `rgba(255,255,255,.05)`,
      borderRadius: `8px`,
      padding: 16
    }
  }, /* @__PURE__ */ React2.createElement("p", null, "This is component iadasdfsdfdffsfsds from ", /* @__PURE__ */ React2.createElement("code", null, "ui")), /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("button", {
    type: "button",
    onClick: () => setCount((c) => c + 1)
  }, "count ", count)));
};
export {
  CounterButton,
  NewTabLink
};
