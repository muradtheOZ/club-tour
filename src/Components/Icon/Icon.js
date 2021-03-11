import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fbIcon from '../../Images/Facebook.png'
import twitterIcon from '../../Images/Twitter.png'
import youTubeIcon from '../../Images/YouTube.png'
import './Icon.css'

const Icon = () => {
    let facebook,youtube,twitter;
    const{id} = useParams()
    const [details, setDetails] = useState([])
    useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data.leagues[0]))
  }, [])
  let {strFacebook,strTwitter,strYoutube} = details
  if(strFacebook === ""){
    strFacebook ="https://www.facebook.com/muradtheoz"
  }
  if(strTwitter === ""){
    strTwitter ="https://www.facebook.com/muradtheoz"
  }
  if(strYoutube === ""){  
    strYoutube ="https://www.youtube.com/muradtheoz"

  }
  facebook = `https://${strFacebook}`;
  youtube =`https://${strYoutube}`;
  twitter =`https://${strTwitter}`;
  
 return (
  <div className='icon'>
      <a href={facebook} target="_blank" ><img src={fbIcon} alt="facebook"/></a>
      <a href={youtube} target="_blank" ><img src={youTubeIcon} alt="youtube"/></a>
      <a href={twitter} target="_blank" ><img src={twitterIcon} alt="twitter"/></a>
  </div>
 )
}

export default Icon