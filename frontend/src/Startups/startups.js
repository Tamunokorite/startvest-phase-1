import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './startups.css';
import { Spinner, Col, Container, Row} from 'react-bootstrap';

// Import Job view
import Job from './jobs';

//Startup json from the backend
var startups = {
     'voltex': {
          'image':false, 
          'name':'Voltex Designs', 
          'location': 'Abuja, Nigeria',
          'est': '2019',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
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
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
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
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
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
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
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
            view: 'startups'
          })
        }

     // Render the startups in column view
     startups = () => {
          return(
               <div>
                    <h1 className='startups-head'>Startups</h1>
                    <Container fluid>
                    {Object.values(startups).map((val, index)=>
                              <Col className='col-startup shadow' key={index}  md={6}>
                                   <h3>{val.name}</h3>
                                   <p className='col-startup-sm'>{val.location}</p>
                                   <p className='col-startup-sm'>Est. {val.est}</p>
                                   <p>{val.description}</p>
                                   <Row>
                                        <Col className='col-startup-sm' sm={7}>{val.industry}</Col>
                                        {(val.job.num) ? <Col className='col-startup-job' sm={5}>{val.job.num} jobs</Col> :''}
                                   </Row>
                              </Col>
                    )}
                    </Container>
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