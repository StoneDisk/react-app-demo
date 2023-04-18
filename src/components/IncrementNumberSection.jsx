import { useState } from "react";


function IncrementNumberSection() {
    const [count, setCount] = useState(0);
    console.log(count);

    function incrementNumber() {
        setCount(count + 1);
    }
    
    return (
    <section className="increment-card">
        <h2>Count is now:</h2>
        <p>{count}</p>
        <button onClick={incrementNumber} type="button">Add By One</button>
    </section>
    );
}

export default IncrementNumberSection;