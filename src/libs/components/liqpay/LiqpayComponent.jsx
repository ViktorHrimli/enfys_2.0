import { LiqpayContext } from "./LiqpayProvider";
import classNames from "classnames";

const LiqpayComponent = ({ children, classname, ...rest }) => {
  return (
    <LiqpayContext.Provider value={{}}>
      <div className={classNames("", classname)} {...rest}>
        {children}
      </div>
    </LiqpayContext.Provider>
  );
};

var Liqpay = Object.assign(LiqpayComponent, {});

export { Liqpay };
