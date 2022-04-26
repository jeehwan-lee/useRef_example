import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    console.log(`count : ${count}`);

  return (
    <div>
        <p>{count}번 클릭하셨습니다.</p>
        <button onClick={() => setCount(count+1)}>클릭</button>
    </div>
  )
}

export default Counter