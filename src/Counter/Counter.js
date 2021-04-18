import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [ counterValue , setCounterValue ] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue);
    };

    const removeFromCounter = () => {
        setCounterValue(counterValue - inputValue);
    };

    let counterClassName;

    if(counterValue >= 100) {
        counterClassName = "green"
    };

    if(counterValue < 0) {
        counterClassName = "red";
    };

    return(
        <div>
            <h3 data-testid="header">My Counter</h3>
            <h1 data-testid="counter" className={counterClassName}>{counterValue}</h1>
            <button 
                data-testid="sub-btn"
                onClick={removeFromCounter}
            >
            -</button>
            <input 
                type="number"  
                value={inputValue}
                className="text-center"
                data-testid="input"
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value))
                }}
            />
            <button 
                data-testid="add-btn"
                onClick={addToCounter}
            >
            +</button>
        </div>
    );
};

export default Counter;