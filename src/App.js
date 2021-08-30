import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navbar from "./Navbar";
import Clock from './Clock';
import Cal from './Cal';
import Calculator from './Calculator';
import TTT from './TTT';
import Notes from './Notes';
import './App.css'
function App() {
  return (
   <div>
     <Router>
       
       <Switch>
         <Route path="/clock">
           <Clock/>
         </Route>
         <Route path="/calendar">
           <Cal/>
         </Route>
         <Route path="/ttt">
           <TTT className="container"/>
         </Route>
         <Route path="/notes">
           <Notes/>
         </Route>
         <Route path="/calculator">
           <Calculator/>
         </Route>
         <Route path="/">
           <Navbar/>
         </Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
