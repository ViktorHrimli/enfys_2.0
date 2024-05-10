"use client";

import { useState, useEffect } from "react";
import { LiqpayContext } from "./LiqpayProvider";
import { LiqpayButton } from "./LiqpayButton";
import { LiqpayCheckout } from "./LiqpayCheckout";
import classNames from "classnames";

const LiqpayComponent = ({ children, classname, ...rest }) => {
  const [checkoutForm, setCheckoutForm] = useState("");
  useEffect(() => {
    fetch("http://localhost:8888/liqpay/form", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setCheckoutForm(res));
  }, []);

  return (
    <LiqpayContext.Provider value={{ checkoutForm }}>
      <div
        className={classNames("", classname)}
        style={{ color: "black" }}
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
