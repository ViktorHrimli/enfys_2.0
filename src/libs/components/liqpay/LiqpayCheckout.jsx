"use client";

import { useEffect, useState } from "react";
import { LiqPay } from "./liqpay_sdk";
const LiqpayCheckout = ({ props, html, ...rest }) => {
  const [isOpenPay, setIsOpenPay] = useState(false);
  var func = () => {
    var liqpaySDK = new LiqPay(
      "sandbox_i53055371277",
      "sandbox_2wkXPTND7x5rjFQOy1aVnKx9VyfJ9xfUnOTQcF5s"
    );
    var html = liqpaySDK.cnb_form({
      action: "pay",
      public_key: "sandbox_i53055371277",
      amount: "50",
      paytypes: "apay,gpay,moment_part,privat24,paypart,cash,invoice,qr",
      currency: "UAH",
      description: "description text",
      order_id: "123123",
      version: "3",
    });

    return html;
  };

  return (
    <section
      id="keku"
      dangerouslySetInnerHTML={{ __html: func() }}
      style={{
        display: "flex",
        marginTop: "50px",
      }}
    ></section>
  );
};

export { LiqpayCheckout };
