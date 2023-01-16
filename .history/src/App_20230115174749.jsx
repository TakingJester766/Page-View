import React from 'react';
import ScrollableText from './ScrollableText';

function App() {
  const text = "Your text here";
  return (
    <div className="App">
      <ScrollableText text={text} />
    </div>
  );
}

export default App;
