import React from 'react';

class Button extends React.Component {

  buttonClicked() {
    alert("Button was clicked!");
  }
  render() {
    return (<div>      
      <button onClick={this.buttonClicked}>Click Me</button>
    </div>);
  }
}

  export default Button;