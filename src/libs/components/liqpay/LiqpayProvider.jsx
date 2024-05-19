"use client";

import { createContext, useContext } from "react";

var LiqpayContext = createContext(null);

const useLiqpayContext = () => {
  var props = useContext(LiqpayContext);

  if (!props) {
    throw new Error("FUCK OFF");
  }
  return props;
};

export { useLiqpayContext, LiqpayContext };
