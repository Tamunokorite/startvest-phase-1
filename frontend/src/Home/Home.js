import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// Importing the main homepage svg picture
import Teampic from '../images/teamates.svg';
import { ArrowRightShort} from 'react-bootstrap-icons';

class investors extends React.Component {
     render(){
          return(
               <div className="Home">
                    <h1 className='Home-head'>Startvest</h1>
                    <Container className='homePage'>
                         <Row >
                              <Col className='text'>
                                   <h5 className='tagline'>We believe in your vision!</h5>
                                   <p className='homeText'>
                                        A place where ideas meets talents and funding.
                                        <p>Connect with top investors and achieve your dreams today!</p>
                                   </p>
                                   <Row className='home-btns'>
                                        <Col className='btn-outline'><Link to='/about'><Button>Learn More</Button></Link></Col>
                                        <Col  className='btn-fill'><Link to='/profile'><Button>Get Started<ArrowRightShort  height={25} width={25}/></Button></Link></Col>
                                   </Row>
                              </Col>
                              <Col className='teamIcon'><img width={600} height={500}  src={Teampic} alt="teamates discussing"  /></Col>
                         </Row>
                    </Container>
               </div>
          )
          
     }
}
export default investors;