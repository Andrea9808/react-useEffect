import React, {useEffect} from "react";

const UseEffectBasi = () => {

  const [value, setValue] = React.useState(0);

  const aumenta = () => {
    setValue(oldValue => oldValue + 1);
  }

  // const funzio = () => {
  //   console.log("Secondo use Effect");
  // }

  useEffect(() => {
    console.log("Eccomi sono use Effect");
    if (value === 0) {
      document.title = `Nessun Messaggio`;
    } else {
      document.title = `Nuovo Messaggio: ${value}`;
    }
    return () => console.log("Clean Up function chiamata");
  },[value]);



  return (
    <div>
      <h4>UseEffect</h4>
      <p>Value: {value}</p>
      <button className="btn btn-info" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default UseEffectBasi;
