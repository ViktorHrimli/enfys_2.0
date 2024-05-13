"use client";

import { useEffect, useState } from "react";
import { LiqPay } from "./liqpay_sdk";
const LiqpayCheckout = ({ props, html, ...rest }) => {
  var func = () => {
    var liqpaySDK = new LiqPay(
      "sandbox_i53055371277",
      "sandbox_2wkXPTND7x5rjFQOy1aVnKx9VyfJ9xfUnOTQcF5s"
    );
    var html = liqpaySDK.cnb_form({
      action: "pay",
      public_key: "sandbox_i53055371277",
      amount: "50",
      currency: "UAH",
      description: "description text",
      order_id: "123123",
      version: "3",
    });

    console.log(html);

    return html;
  };

  useEffect(() => {
    var str = func();
    document.getElementById("keku").innerHTML = str;
  }, []);
  return (
    <div
      id="keku"
      style={{
        display: "block",
        marginTop: "50px",
        height: "100%",
        width: "100%",
      }}
    >
      <form
        method="POST"
        action="https://www.liqpay.ua/api/3/checkout"
        accept-charset="utf-8"
      >
        <input
          type="hidden"
          name="data"
          value="eyJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5Ijoic2FuZGJveF9pNTMwNTUzNzEyNzciLCJhbW91bnQiOjUwLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoiZGVzY3JpcHRpb24gdGV4dCIsIm9yZGVyX2lkIjoiMTIzMTIzIiwidmVyc2lvbiI6M30="
        />
        <input
          type="hidden"
          name="signature"
          value="sjhM4ksRqbFEmNEu5Sm7fFxSQic="
        />
        <script
          type="text/javascript"
          src="https://static.liqpay.ua/libjs/sdk_button.js"
        ></script>
        <sdk-button
          label="Сплатити"
          background="#77CC5D"
          onClick="submit()"
        ></sdk-button>
      </form>
    </div>
  );
};

export { LiqpayCheckout };
