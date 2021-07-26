import { useEffect, useState } from "react";

function Hello() {
  const [state, setstate] = useState(false);

  useEffect(() => {
    console.log("hello world");
  }, []);

  console.log(state);
  console.log('me');
  console.log('mee');
  
  

  const update = () => {
    setstate(!state);
  };
  return (
    <div>
      mchn
      <button onClick={update}>Click me</button>
      hello world
    </div>
  );
}

export default Hello;
