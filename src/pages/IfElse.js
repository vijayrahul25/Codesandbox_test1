import React from "react";

class IfElse extends React.Component {
  render() {
    if (this.props.condition === "Rahul") {
      return <p>Hi Rahul, Welcome</p>;
    } else {
      return <p>Hi {this.props.condition}, First time visitor</p>;
    }
  }
}

export default IfElse;
