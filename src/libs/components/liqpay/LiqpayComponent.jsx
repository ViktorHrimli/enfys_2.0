import { LiqpayContext } from "./LiqpayProvider";

const LiqpayComponent = ({ children, classname, ...rest }) => {
  return (
    <LiqpayContext.Provider value={{}}>
      <div className={classname} {...rest}>
        {children}
      </div>
    </LiqpayContext.Provider>
  );
};

var Liqpay = Object.assign(LiqpayComponent, {});

export { Liqpay };
