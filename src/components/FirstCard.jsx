import React from "react";
import "./FirstCard.css";
import Div1 from "./Div1";
import MianBoard from "./img/Div2/MianBoard";
import SecoundBoard from "./img/Div2/SecoundBoard";

function FirstCard() {
  return (
    <div className="Container">
      <div className="div1">
        <Div1 />
      </div>
      <div className="div2">
        <div className="mainBord">
          <MianBoard />
        </div>
        <div className="secBord">
          <SecoundBoard/>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
