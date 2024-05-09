"use client";
import { LiqpayContext } from "./LiqpayProvider";
import { LiqpayButton } from "./LiqpayButton";
import classNames from "classnames";

const LiqpayComponent = ({ children, classname, ...rest }) => {
  return (
    <LiqpayContext.Provider value={{}}>
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
});

export { LiqpayObject };
