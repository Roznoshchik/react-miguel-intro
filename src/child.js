import React from 'react';

export default function Child({step, setCounter}) {

    const inc = () => {
        setCounter(x => x + step); 
    };

    const dec = () => {
        setCounter(x => x - step);
    };

    
    return (
        <div className="buttons">
          <button onClick={dec}>-{step}</button>
          <button onClick={inc}>+{step}</button>
        </div>
    );
}