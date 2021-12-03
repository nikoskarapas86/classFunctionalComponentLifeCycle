import { useEffect, useRef, useState } from "react";
function Clock_fn() {
  const [date, setDate] = useState(new Date());
  // const
  const intervalId = useRef(null);

  useEffect(() => {
    //   console.log('use Effect')
    intervalId.current = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId.current);
  }, [date]);
  return (
    <>
      <h1>Clock in functional component</h1>
      <div>It is {date.toLocaleTimeString()}</div>
    </>
  );
}
export default Clock_fn;
