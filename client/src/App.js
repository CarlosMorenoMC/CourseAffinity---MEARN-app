import React from 'react';
import './App.scss';
import { DatePicker } from 'antd';

function App() {


  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Course Affinity</h1>
        <DatePicker onChange={onChange} />
      </header>
    </div>
  );
}

export default App;
