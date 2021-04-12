import React from 'react';
import SubNav from './SubNav';

export default props => {
  return (
    <div className="bg-white border border-secondary rounded p-4">
      <SubNav />
      {props.children}
    </div>
  );
};
