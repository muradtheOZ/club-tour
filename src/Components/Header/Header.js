import React from 'react';
import { useParams } from 'react-router';
import './Header.css'

const Header = (props) => {
    
    
    const styler = props.styleName;
    
    const id = props.id
    console.log(id);
    let giveBg;
    console.log(styler)
    if(id===undefined){
        giveBg = "mainClass sticky-top  customHeader  text-center"
    }
    else{
        giveBg ="detailsClass sticky-top"
    }
    return (
        <div className={giveBg}>
        <div className = "" >
            <p ClassName="align-middle">Club Tour</p>
        </div>
        </div>
        
    );
};

export default Header;