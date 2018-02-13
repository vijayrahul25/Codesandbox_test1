import React from 'react';

class StateChangeClick extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: Math.random().toString(36).substring(7),
      lastname: Math.random().toString(36).substring(4),
    };
  }
  buttonClicked() {
    
    const newState = {
      name: "RandoMNAme-  {Math.random().toString(36).substring(4)}"
    };

    this.setState(newState);
  }
  render() {
    return (<div>
      <p>Hello, {this.state.name},  You're from {this.state.lastname}.</p>
      <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
    </div>
    );
  }
}

export default StateChangeClick;