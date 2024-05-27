"use client";

import { useState, useEffect } from "react";
import { LiqpayContext } from "./LiqpayProvider";
import { LiqpayButton } from "./LiqpayButton";
import { LiqpayCheckout } from "./LiqpayCheckout";
import classNames from "classnames";

const LiqpayComponent = ({ children, classname, ...rest }) => {
  const [checkoutForm, setCheckoutForm] = useState("");

  return (
    <LiqpayContext.Provider value={{ checkoutForm }}>
      <div
        className={classNames("", classname)}
        style={{
          color: "black",
          display: "block",
          // width: "500px",
          // height: "300px",
        }}
        {...rest}
      >
        {children}
      </div>
    </LiqpayContext.Provider>
  );
};

var LiqpayObject = Object.assign(LiqpayComponent, {
  Button: LiqpayButton,
  Form: LiqpayCheckout,
});

export { LiqpayObject };
