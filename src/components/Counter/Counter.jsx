import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>

    )
}

export default Counter
