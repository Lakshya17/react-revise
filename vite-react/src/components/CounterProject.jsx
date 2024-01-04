import { useState } from "react";

const CounterProject = () => {

    let [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    return(
        <>
            <div>
                <h1>Counter Value: {count}</h1>
                <button onClick={increaseCount}>Add Count</button>
                <button onClick={decreaseCount}>Reduce Count</button>
            </div>
        </>
    )
}

export default CounterProject;