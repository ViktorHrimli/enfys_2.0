import { useLiqpayContext } from "./LiqpayProvider";
import { useEffect } from "react";
const LiqpayCheckout = ({ props, ...rest }) => {
  var form = useLiqpayContext();

  useEffect(() => {
    if (form) {
      //   var noStr = form.checkoutForm.html.split("").join("");
      var adwd = "<p>ЗАЕБАЛ СУКА</p>";

      var tempDiv = document.createElement("div");

      tempDiv.innerHTML = adwd;

      var adwdElement = tempDiv.firstChild;

      document.getElementById("kek").appendChild(adwdElement);
    }
  }, []);
  return <div id="kek"></div>;
};

export { LiqpayCheckout };
