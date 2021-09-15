import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CountryDetails.css'


const CountryDetails = () => {
    const [country, setCountry] = useState([])
    let { countryName } = useParams();
    console.log(countryName);

    useEffect(() => {
        const api = `https://restcountries.eu/rest/v2/name/${countryName}`
        axios(api)
            .then(data => setCountry(data.data))
            .catch(()=>{
                console.log("Hello I am Error!");
              })
    }, [])



    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
        <div className="col-md-6 mt-5" >
            {country.map(cd => {
                return (
                    <div className="card2  bg-light ">
                        <div className="overflow2">
                            <img src={cd.flag} alt="a wallpaper"  />
                        </div>
                        <div className="card-body ">
                            <h4 className="text-dark text-center">{cd.name}</h4>
                            <h4 className="card-text text-dark" > capital : {cd.capital} </h4>
                            <h4 className="card-text text-dark "> region : {cd.region}</h4>
                            <h4 className="card-text text-dark "> area : {cd.area} </h4>
                            <h4 className="card-text  text-dark "> population : {cd.population} </h4>

                        </div>
                    </div>
                )
            })}
</div>
        </div>
    );
};

export default CountryDetails;