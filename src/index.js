import React from "react";
import ReactDOM from "react-dom";

import Detail from "./pages/Detail";
import Props from "./pages/Props";
import IfElse from "./pages/IfElse";
import State from "./pages/State";

ReactDOM.render(
  <div>
    <Detail />
    <Props message="hi my first property" />
    < IfElse condition="Randome"/>
    < IfElse condition="Rahul" />
    
    <br/><b>--STATE--</b><br />
    <State/>
  </div>,

  document.getElementById("root")
);
