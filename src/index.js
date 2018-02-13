import React from "react";
import ReactDOM from "react-dom";

import Detail from "./pages/Detail";
import Props from "./pages/Props";
import IfElse from "./pages/IfElse";
import Button from "./pages/Button";
import State from "./pages/State";
import StateChangeClick from "./pages/StateChangeClick";
import AjaxRead from "./pages/AjaxRead";

ReactDOM.render(
  <div>
  {/*}
    <Detail />
    <Props message="hi my first property" />
    < IfElse condition="Randome"/>
    < IfElse condition="Rahul" />
    <Button />
    <br/><b>--STATE--</b><br />
    <State/>
    <br /><b>--STATE Change on button click--</b><br />
    <StateChangeClick/>
    */}    
    <AjaxRead />
  </div>,

  document.getElementById("root")
);
