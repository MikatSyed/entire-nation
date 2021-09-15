import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = ({name, image, capital}) => {
  
    return (
        <>
    <div className="card text-center bg-light animate__animated animate__fadeInUp card-top">
      <div className="overflow">
        <img src={image} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="text-dark">{name}</h4>
        <h4 className="card-text text-dark">{capital} </h4>
      <Link to={`/country/${name}`}> <button className="btn btn-primary">Explore</button></Link>
     
        
      </div>
    </div>
            
        </>
    );
};

export default Country;