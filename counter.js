import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // Function to handle increment
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to handle decrement
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className='main'>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
