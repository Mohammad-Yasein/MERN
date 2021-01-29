import React, { Component } from 'react';

export class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div>
        <h3>
          {lastName}, {firstName}
        </h3>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;
