import React from 'react';

class State extends React.Component {
  constructor(props) {
    super(props);

    const people = [];

    for (let i = 0; i < 4; i++) {
      people.push({
        firstname: Math.random().toString(36).substring(4),
        lastname: Math.random().toString(36).substring(7)
      });
    }

    this.state = { people };
  }
  render() {
    return (<div>
      <b>Randome name array</b>
      {this.state.people.map((person, index) => (
        <p>Hello, {person.firstname} from {person.lastname}!</p>
      ))}
    </div>);
  }
}

export default State;