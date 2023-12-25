import React, { useEffect, useState } from 'react';

const UnMountTest = () => {

  useEffect(() => {
    console.log("Mount!")

    return () => {
      console.log("Unmount!")
    }
  }, [])

  return (
    <div>
      UnMount Testing Component
    </div>
  )
}

const LifeCycle = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  useEffect(() => {
    console.log("Mount!")
  }, []);

  useEffect(() => {
    console.log("Update!")
  });

  useEffect(() => {
    console.log(`count is update: ${count}`)
    if(count > 5){
      alert("5가 넘어갑니다.");
      setCount(0)
    }
  }, [count])

  useEffect(() => {
    console.log(`text is update: ${text}`)
  }, [text])

  return (
    <div style={{padding: 20}} className='LifeCycle'>
      {count}
      <button onClick={() => {setCount(count+1)}}>+</button>
      <button onClick={() => {if(count < 1){return 0}else(setCount(count-1))}}>-</button>
      <button onClick={toggle}>on/off</button>
      <div>
        <input value={text} onChange={(e) => {setText(e.target.value)}} />
      </div>
      {isVisible && <UnMountTest />}
    </div>
  )
}

export default LifeCycle