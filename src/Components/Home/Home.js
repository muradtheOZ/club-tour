import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';
import './Home.css'

const Home = () => {
  const [leagues, setLeagues] = useState([])
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
  }, [])
  // console.log(leagues)
  const shortLeagues = leagues.splice(25, 15);


  return (
    <div className="bg-blues">
        <div className="m-3 p-2">
        <Header> </Header>
       <div className="row" >
      {
        shortLeagues.map(league => {
          return <Leagues key={league.idLeague} league={league} />
        })
      }

    </div>
    </div>
    </div>
  
    
  );
};

export default Home;