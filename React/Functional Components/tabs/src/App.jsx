import React from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const items = [
    { label: 'Tab 1', content: 'Tab 1 content is shown here.' },
    { label: 'Tab 2', content: 'Tab 2 content is shown here.' },
    { label: 'Tab 3', content: 'Tab 3 content is shown here.' },
    { label: 'Tab 4', content: 'Tab 4 content is shown here.' },
  ];

  return <Tabs items={items} />;
};

export default App;
