import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css'

const Home = () => {
    const[leagues, setLeagues]=useState([])
    useEffect(()=>{
            const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
            fetch(url)
            .then(res=> res.json())
            .then(data=>setLeagues(data.leagues))
    },[])
    // console.log(leagues)
    const shortLeagues = leagues.splice(0,15);


     return (
        <div>
        {
      shortLeagues.map(league=>{
        return<Leagues league ={league}/>
      })
    }

        </div>
    );
};

export default Home;