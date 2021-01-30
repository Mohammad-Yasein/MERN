import React from 'react';

const PersonCard = props => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div className="mb-4">
      <h3>
        {lastName}, {firstName}
      </h3>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

export default PersonCard;
