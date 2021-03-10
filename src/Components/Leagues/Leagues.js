import React from 'react';
import { Link } from 'react-router-dom';

const Leagues = (props) => {
    const{idLeague,strLeague,strSport} = props.league;
    console.log(strLeague);
   
    return (
        <div>
          <h2>{strLeague}</h2>
            <h4>Sports Type: {strSport}</h4>
            <Link to ={`/details/${idLeague}`}><button>Explorer</button></Link>
            
        </div>
    );
};

export default Leagues;