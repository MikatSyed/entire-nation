import React from 'react';
import axios from 'axios';
import Country from './Country';
import { useEffect, useState } from 'react';

const Card = () => {
    const[countries,setCountries] = useState([]);
  useEffect(() => {
     const api = `https://restcountries.eu/rest/v2/all`
     axios(api) 
     .then(data => setCountries(data.data))
     .catch(()=>{
       console.log("Hello I am Error!");
     })
  },[])
  const countriesData = countries.slice(0,100);
  console.log(countriesData);
    return (
        <>
             <h2 className="text-center text-danger m-5"> Entire Nation</h2>
   
   <div className="container d-flex justify-content-center align-items-center h-100 ">
     <div className="row">
       {countries.map(({ name, flag, capital }) => (
         <div className="col-md-4 col-sm-10  mb-5 " >
           <Country image={flag} name={name} capital={capital}  />
         </div>
       ))}
     </div>
   </div>

     
   
  

  

        </>
    );
};

export default Card;