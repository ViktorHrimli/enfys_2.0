import { createContext, useContext } from "react";

export var LiqpayContext = createContext(null);

const useLiqpayContext = () => {
  var props = useContext(LiqpayContext);

  if (!props) {
    throw new Error("FUCK OFF");
  }
  return props;
};

export { useLiqpayContext };
