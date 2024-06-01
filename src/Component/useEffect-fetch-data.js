import React, {useState, useEffect} from "react";
import axios from "axios";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [utenti, setUtenti] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    //console.log(response);
    setUtenti(response.data);
  }
  useEffect(() => {
    getData();
  },[]);
  return (
    <>
      <h1 className="text-center m-5">Fetch Component</h1>
      <ul className="card p-5">
        {utenti.map(utente =>{
          const {id, login, avatar_url : img, html_url} = utente;
          return (
            <li  style={{listStyleType: 'none'}}
             key={id} className="shadow d-flex align-items-center justify-content-between">
              <img className="w-25 rounded-circle" src={img} alt={login} />
              <div >
                <h4>{login}</h4>
              </div>
              <div>
                <a className="mx-5" href={html_url}>Profile</a>
              </div>
            </li>
          )
          
        })}
      </ul>
    </>
  );
};

export default FetchComponent;
