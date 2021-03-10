import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {Container, Row, Col} from 'react-bootstrap';
// Importing the main homepage svg picture
import Teampic from '../images/teamates.svg';

class investors extends React.Component {
     render(){
          return(
               <div className="Home">
                    <h1 className='homeHead'>Startvest</h1>
                    {/* <div id='mainImage'><img id='team_bg' width={200} height={200} src={Teampic} alt="teamates discussing" /></div> */}
                    {/* <Media>
                         <Media.Body>
                         <h5>We believe in your vision</h5>
                         <p className='homeText'>
                              Connect with top investors and achieve your dreams today!
                         </p>
                         </Media.Body>
                         <img  className="ml-3 homePic" src={Teampic} alt="teamates discussing"  />
                    </Media> */}
                    <Container className='homePage'>
                         <Row className='justify-content-md-center'>
                         <Col>
                         <h5 className='homeHead'>We believe in your vision!</h5>
                         <p className='homeText'>
                              Connect with top investors and achieve your dreams today!
                         </p>
                         </Col>
                         <Col><img width={800} height={900}  src={Teampic} alt="teamates discussing"  /></Col>
                         </Row>
                    </Container>
               </div>
          )
          
     }
}
export default investors;