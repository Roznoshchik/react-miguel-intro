import React from 'react'

const Child2 = React.memo(({setCounter}) => {
    const reset = () => {
        setCounter(0)
    }

    return (
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    )
});

export default Child2;