import './Nav.css';
import { Link } from "react-router-dom";
let Navbar = ()=>{
    return (
      <div>
        <h1>ALL IN ONE TOOL</h1>
     
      <div className="Complete">
        <div className="row">
          <div className="col1">
            <Link to={'/clock'}>
            <img src="CLOCK.jpg">
            </img>
            </Link>
            <Link to={'/calculator'}>
            <img src="calc.png"></img>
            </Link>
          </div>
        </div>
        <div className="row">
          <div  className="col2">
         <Link to={'/ttt'}>
          <img src="TTT.jpg"></img>
          </Link>
          <Link to='notes'>
          <img src="NOTES.jpg"></img>
          </Link>
          </div>  
                
        </div>
        <div className="row">
          <div className="col3">
            <Link to={'/calendar'}>
          <img src="CALENDAR.jpg"></img>
          </Link>
          </div>
        </div>
      </div>
      </div>
    );
};



export default Navbar;