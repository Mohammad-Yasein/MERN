import React from 'react';

const ShowBoxes = props => {
  return (
    <div>
      {props.boxes.map((box, index) => (
        <div
          key={index}
          style={{
            backgroundColor: box.color,
            display: 'inline-block',
            float: 'left',
            height: `${box.height}px`,
            margin: '15px',
            width: `${box.width}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShowBoxes;
