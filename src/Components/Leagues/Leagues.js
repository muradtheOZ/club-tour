import React from 'react';
import { Link } from 'react-router-dom';
import './Leagues.css'

const Leagues = (props) => {
    const{idLeague,strLeague,strSport} = props.league;
    console.log(strLeague);
   
    return (
        <div className="col-lg-4 col-md-6 p-4  custom-box">
            <div className="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div className="card-body">
             <h4 className="card-title">{strLeague}</h4>
             <h5 className="card-text" >Sports Type: {strSport}</h5>
            <Link  className ="btn btn-primary" to ={`/details/${idLeague}`}>Explorer</Link>

            </div>
            </div>
        </div>
    );
};

export default Leagues;