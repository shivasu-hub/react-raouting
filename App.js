import React from 'react';
import './App.css';
import Data from './component/mounting.js';
import Updatedata from './component/update.js';
import Unmountdata from './component/unmounting.js';
import Hdata from './component/Header.js';
 import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
 

export default class App extends React.Component{

  render(){
    return(
        <div className="main">
        
       
       <Router>
       <div id="main1">
       <Hdata/>
       <Link className="link" to ="" > Mounting      </Link>
       <Link className="link" to ="/abc" > Updating   </Link>
       <Link className="link" to ="/bcd" > UnMounting  </Link>
       </div>
       <Route exact path="/" component={Data}/>
       

       <Route  path="/abc" component={Updatedata}/>
       

       <Route  path="/bcd" component={Unmountdata}/>
       
      </Router>
        </div>
    );
  }
}
