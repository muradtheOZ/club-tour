import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt,faFlag,faFutbol,faVenus} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import './Details.css'
import menImage from '../../Images/male.png'
import womenImage from '../../Images/female.png'
import Header from '../Header/Header';

const Details = () => {
    const founded = <FontAwesomeIcon icon={faMapMarkerAlt}/>
    const flag = <FontAwesomeIcon icon={ faFlag} />
    const sport = <FontAwesomeIcon icon={faFutbol}/>
    const gender = <FontAwesomeIcon icon={faVenus}/>
    
   
    
    const{id} = useParams()
    const [details, setDetails] = useState([])
    useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data.leagues[0]))
  }, [])
    // console.log(details);
    const{strLeague,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strDescriptionFR} =details;
    return (
        <div className="mainDetails">
            <Header id={id} > </Header>
        <div className=" container pt-3 shadow-lg rounded d-flex container-xl customDetails  text-center pm-2 pe-2 mt-3">
            <div >
            <h1>{strLeague}</h1>
            <p> {founded } Founded: {intFormedYear}</p>
            <p> {flag }Country: {strCountry}</p>
            <p>{sport }Sport Type: {strSport}</p>
            <p>{gender}Gender:{strGender}</p>
            </div>
            <div>
            <img src={menImage} alt=""/>
            </div>
        </div>
        <div className="container customDescription justify-text-center" >
        <p className="p-2">{strDescriptionFR}</p>
        <p className="p-2"> {strDescriptionEN}</p>
        </div>
        
        </div>
     
    );
};

export default Details;