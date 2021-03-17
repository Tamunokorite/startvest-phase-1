import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jobs.css';
import { Row, Col , Container} from 'react-bootstrap';
import {CircleFill} from 'react-bootstrap-icons';

const jobsList = {
          '1':{
               'name': 'Senior Developer at Alpha Tech',
               'role': 'FullStack developer',
               'location': 'Lagos, Nigeria',
               'salary': 'Unpaid',
               'type': 'Part-time'
          }, 
          '2':{
               'name': 'Field Technician at Slick Cloud',
               'role': 'Technician',
               'location': 'Lagos, Nigeria',
               'salary': 'N500,000 monthly',
               'type': 'Full-time'
          } ,
          '3':{
               'name': 'Internship opportunity at voltex',
               'role': 'FullStack developer',
               'location': 'Abuja, Nigeria',
               'salary': 'Unpaid',
               'type': 'Remote '
          }  
}


class jobs extends React.Component {
     render(){
          return(
          <div>
               <h1 className='investors-head'>Latest jobs at startups</h1>
               <h5>Showing {Object.keys(jobsList).length} available jobs</h5>  
               <Container fluid>
               <Row>
               {Object.values(jobsList).map((val, ind) => 
               <div className='job-container shadow'>
               <Row>
               <Col sm='auto'><CircleFill className='icon-back' height={50} width={50}/></Col>
               <Col sm='auto'>
                    <div key={ind} className='col-startup-name'>{val.name}</div>
                    <span >{val.role}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span >{val.location}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span >{val.type}</span>
               </Col>
               </Row>
               </div>
               )}
                </Row>
                </Container>
          </div>
          )
     }
}
export default jobs;