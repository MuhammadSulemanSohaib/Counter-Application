import React , {useState} from "react";

function Counter (){

    let [count , setCount] = useState(0)

//     // const decreamentOperator = () => {
//     //     setCount(count - 1)
//     // }

//     // const increamentOperator = () => {
//     //     setCount(count + 1)
//     // }

//     // const resetOperator = () => {
//     //     setCount(0)
//     // }

    return(
        <div style={{margin:50}}>

            <h2>Value of counter variable is : </h2>

            <button onClick={ () => setCount(count - 1) }> - </button>

            <span style={{padding:10}}> {count} </span>

            <button onClick={ () => setCount(count + 1) }> + </button>

            <br />

            <button style = {{margin:20 , padding:2}} onClick={ () => setCount(0) }>Reset</button>

        </div>
    )
}

export default Counter