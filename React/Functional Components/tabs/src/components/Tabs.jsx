import React from 'react';

const Tabs = props => {
  const items = props.items;

  const clickHandler = (e, content) => {
    const tab = document.getElementsByClassName('active')[0];
    const tabContent = document.getElementById('tab-content');
    tab && tab.classList.remove('active');
    e.target.classList.add('active');
    tabContent.innerHTML = content;
  };

  return (
    <div>
      <div>
        {items.map((item, index) => {
          return (
            <button
              key={index}
              onClick={e => clickHandler(e, item.content)}
              className="btn btn-outline-dark mx-1 px-4 py-2"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div id="tab-content" className="border border-dark rounded mt-4 p-4"></div>
    </div>
  );
};

export default Tabs;
