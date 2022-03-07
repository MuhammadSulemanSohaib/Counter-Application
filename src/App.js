import React, { useState } from "react";

// import Counter from "./Counter"

import Parent from "./Parent.js"

import CounterContext from "./CounterContext"

import "./App.css";

function App() {

  let countState = useState(0)

  return (

    <CounterContext.Provider value={countState}>

    <div  className='App' >

      <Parent />

      {/* <Counter /> */}
      
    </div>  

    </CounterContext.Provider>
    );
}

export default App;