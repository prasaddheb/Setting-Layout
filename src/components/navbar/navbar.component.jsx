import React from "react";
import { ReactComponent as Logo } from '../../assets/setting.svg';
import { ReactComponent as Location} from '../../assets/location.svg';
import { ReactComponent as Person} from '../../assets/person.svg';
import { ReactComponent as Calender} from '../../assets/calender.svg';
import { ReactComponent as Light} from '../../assets/light.svg';
import { ReactComponent as Chart} from '../../assets/chart.svg';
import './navbar.styles.css'; 
export  default  function Navbar(){
  
  function Logoin(event) {
    event.target.style.background = 'white';
  }
  function Logoout(event){
    event.target.style.background="";
  }
return(
    <div className='navbar'>
      <ul>
        <li>
        <a href="/">client</a>
      
        </li> 
        <li>  <Logo  onMouseOver={Logoin} onMouseOut={Logoout} className="logo"/></li>
        <li>  <Location  onMouseOver={Logoin} onMouseOut={Logoout} className="logo"/></li>
        <li>  <Person   onMouseOver={Logoin} onMouseOut={Logoout}className="logo"/></li>
        <li>  <Calender  onMouseOver={Logoin} onMouseOut={Logoout}className="logo"/></li>
        <li>  <Light   onMouseOver={Logoin} onMouseOut={Logoout}className="logo"/></li>
        <li>  <Chart  onMouseOver={Logoin} onMouseOut={Logoout} className="logo"/></li>
     </ul>
     </div>
);
}
// export default Header;