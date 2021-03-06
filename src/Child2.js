import React, { useReducer } from "react";

import counterReducer from "./CounterReducer";

const Child2 = () => {
    let [state , dispatch] = useReducer(counterReducer , 1)

    return(
        <div>
            <h2>This is second child using counter reducer.</h2>
            <h3>Value of reducer state is : {state}</h3>

            <button onClick={ () => dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2