import React , {useContext} from "react";

import counterContext from "./CounterContext";

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)

    return(
        <div>
            <h2>This is first child using counter context.</h2>
            <h3>Counter Value is : {counterValue[0]} </h3>

            <button onClick={ () => { counterValue[1] (++counterValue[0]) }}>Increment Context</button>
            <br />
            <hr />
        </div>
    )
}

export default Child