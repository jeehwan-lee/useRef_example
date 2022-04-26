import React, {useState, useEffect} from 'react'

function AutoCounter() {

    const [count, setCount] = useState(0);
    console.log(`count : ${count}`);

    useEffect(()=> {
        const intervalId = setInterval(()=> setCount((count) => count + 1), 1000);
        return () => clearInterval(intervalId);
    }, []);
  return (
    <div>자동카운트 : {count}</div>
  )
}

export default AutoCounter