import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Header.css'

const Header = (props) => {
    const id = props.id
   const[headerInfo, setHeaderInfo] = useState({})
   useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
    fetch(url)
  .then(res => res.json())
  .then(data => setHeaderInfo(data.leagues[0]))
   },[])
   

    console.log(headerInfo);
    const{strBanner,strBadge} = headerInfo
    let badge;
    let giveBg;
    let banner;
    let title
    if(id===undefined){
        giveBg = "mainClass sticky-top  customHeader  text-center"
         title = <p ClassName="align-middle">Club Tour</p>
         badge = ""
        banner = ""
    }
    else{
        giveBg ="detailsClass sticky-top"
        badge = <img className="customBadge" src={strBadge} alt=""/>
        title = "";
        if(strBanner !== null){
             banner   =<img className="banner" src={strBanner} alt=""/>
        }
        else{
            banner = <img className="banner" src="https://i.ibb.co/1R1V6vK/noimage.png" alt=""/> 
        }


        // const logo= 
    }
    return (
        <div className={giveBg}>
        <div>
            {title}
            <div className="dynamics container">
            {banner}
            {badge}
            
            </div>
            
            
        </div>
        </div>
        
    );
};

export default Header;