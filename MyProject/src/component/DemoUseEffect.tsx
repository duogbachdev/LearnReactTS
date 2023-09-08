import React, { useEffect, useState } from 'react'

const DemoUseEffect = () => {
  const [data, setData] = useState<number>(1)
  const [running,setRunning] = useState<boolean>(false)
  useEffect(() => {
    let runningTime : any;
    if (running === true) {
      runningTime = setInterval(() => {
        setData(prevData => prevData + 1)
      },1000)
    }
    return () => {
      if (runningTime) {
        clearInterval(runningTime) // clear khi component unmounted
      }
    }
  }, [running])
  // giống như 1 component did mount của react class component
  // chỉ chạy duy nhất 1 lần
  // khi có tham số là 1 giá trị , useEffect se check gía trị đó thay đổi thì component sẽ được render lại để cập nhập ra dom
  // clearup function

  const handelStart = () => {
    setRunning(true)
  }
  const handelStop = () => {
    setRunning(false)
  }
    const handelEnd = () => {
    setData(0)
  }
  return (
    <div>
      {data}
      <button onClick={handelStart}>
        start
      </button>
       <button onClick={handelStop}>
        stop
      </button>
      <button onClick={handelEnd}>
        end
      </button>
    </div>
  )
}

export default DemoUseEffect
