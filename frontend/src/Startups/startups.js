import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './startups.css';
import { Spinner} from 'react-bootstrap';

// Import Job view
import Job from './jobs';

//Startup json from the backend
var startups = {
     'voltex': {
          'image':false, 
          'name':'Voltex Designs', 
          'location': 'Abuja, Nigeria',
          'est': '2019',
          'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Graphics Design',
          'job': {
               'num': 1,
          }
     },
     'alpha': {
          'image':false, 
          'name':'Alpha Tech', 
          'location': 'Lagos, Nigeria',
          'est': '2017',
          'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Cable Networks',
          'job': {
               'num': 2,
          }
     },
     'spartech': {
          'image':false, 
          'name':'Spartech Energy ', 
          'location': 'Ogun, Nigeria',
          'est': '2018',
          'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Energy solution',
          'job': {
               'num': null,
          }
     },
     'slick': {
          'image':false, 
          'name':'Slick Cloud', 
          'location': 'Kaduna, Nigeria',
          'est': '2020',
          'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Saas, Iaas',
          'job': {
               'num': 3,
          }
     }
}



class Startup extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
            view: 'job'
          })
        }

     // Render the startups in column view
     startups = () => {
          return(
               <div>
                    <h1>Startups</h1>
                    Startups view in columns
               </div>
          )
     }
      // Render the detailed view of a startup
      startup = () => {
          return(
               <div>
                   Detailed view of startup
               </div>
          )
     }

     renderview(){
          switch(this.state.view){
               default: return <div><Spinner className="load"  animation='border' color='#21295C'/></div>
                   case 'startups': return this.startups();
                   case 'startup': return this.startup();
                   case 'job': return <Job/>;
                   
           }
     }
     render(){
          return(
          <div className='startups'>
               {this.renderview()}               
          </div>
          )
     }
}
export default Startup;