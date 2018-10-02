import React from "react";

const Home = ({ counter, decrement, increment, load }) => (
    <div>
        <h1>Home works!</h1>
        <hr />
        <button onClick={load}>load</button>
        <hr />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default Home;