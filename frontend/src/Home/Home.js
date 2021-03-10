import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

// Importing the main homepage svg picture
import Teampic from '../images/teamates.svg';

class investors extends React.Component {
     render(){
          return(
               <div className="Home">
                    <h1>Startvest</h1>
                    <div id='mainImage'><img id='team_bg' src={Teampic} alt="teamates discussing" /></div>
               </div>
          )
          
     }
}
export default investors;