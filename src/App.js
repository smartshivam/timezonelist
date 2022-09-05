import logo from './logo.svg';
import './App.css';
import { Alltimezone } from './timezonedata';
import React from 'react';
import { useState } from 'react';
import Dropdown from './dropdown';

function App() {

 
  return (
    <div className="App">
      {/* <select >
      <option ></option>
      {Alltimezone.map((item)=><option>{`${item.value} ${item.text}`}</option>)}
     </select> */}
     <Dropdown 
     value=""
     onChange={(val)=>console.log("return",val)}
     />

    </div>
  );
}

export default App;
