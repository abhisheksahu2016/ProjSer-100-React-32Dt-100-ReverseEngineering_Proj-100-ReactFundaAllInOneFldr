import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

// Element-Get
const container = document.getElementById("root");
// Element-SetToReactDOMAsRoot
const root = ReactDOM.createRoot(container);
// Element-Render
root.render(<Hello />);