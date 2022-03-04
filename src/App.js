import React, {useState}  from "react";

import "./App.css";

// import Counter from "./Counter"

function App() {

 let [count, setCount] = useState(0)

  return (

    <div  className='App' >

      {/* <Counter /> */}
      
      <h2>Value of counter variable is : </h2> 

      <button style={{margin:10 , padding:5}} onClick={ () => setCount(count-1) }>-</button> 

      <span style={{padding:10}}>{count}</span>

      <button style={{margin:10 , padding:5}} onClick={ () => setCount(count+1) }>+</button> 

      <br />

      <button style={{margin:10 , padding:2}} onClick={ () => setCount(0) }>Reset</button>

    </div>  
    );
}

export default App;