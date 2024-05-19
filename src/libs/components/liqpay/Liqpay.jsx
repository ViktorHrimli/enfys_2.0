"use client";
import { memo, useState, useEffect } from "react";
import { LiqpayObject } from "./LiqpayComponent";

const Liqpay = () => {
  return (
    <LiqpayObject>
      {/* <LiqpayObject.Button /> */}
      <LiqpayObject.Form />
    </LiqpayObject>
  );
};

var MemoLiqpay = memo(Liqpay);

export { Liqpay };
