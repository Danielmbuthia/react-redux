import React from 'react';
import './App.css';
import AppRoute from "./route";
function App() {
  return (
      <div>
          <h1>{process.env.REACT_APP_NAME}</h1>
          <AppRoute/>
      </div>
  );
}

export default App;
