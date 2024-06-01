import React, {useEffect, useState} from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  console.log('Render');

  function dimesioneFinestra() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('Settaggio Event Listener');
    window.addEventListener('resize' , dimesioneFinestra);

    // return () => {
    //   console.log('Rimozione Event Listener');
    //   window.removeEventListener('resize', dimesioneFinestra);
    // }
  },[]);

  return (
    <>
    <h1 className="text-center m-5">UseEffect in window.innerWidth</h1>
    <div className="container w-75 bg-white shadow py-4"
    style={{textAlign:'center'}}>
       
      <h1> {size} </h1>
    </div>
    </>
  );
};

export default CleanUp;
