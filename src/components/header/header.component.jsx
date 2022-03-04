import React from "react";
import { ReactComponent as Setting} from '../../assets/setting.svg';
import { ReactComponent as History} from '../../assets/history.svg'; 
// import './header/styles.css';
import '../header/header.styles.css';
export default function Header(){


    return(
<div className='header'>
<ul>
  
  <li>  <Setting className="logo"/></li>
  <li>
  <a href="/"  className="gene">General Setting</a>

  </li> 
  <li>
  <History className="history"/ >
  </li>
  <li className="history" id="activity">Activity History</li>
</ul>

</div>
    );
}