import React from 'react';

import  './NavigationItem.css';

const navigationItem = (props) => { 
   let classes =  props.active ? "active" : null ;    
    return (
        <li className="NavigationItem">
            <a 
                href={props.link}
                className={classes}>{props.children}</a>
        </li>
    );

}
  
  
  
    

export default navigationItem;