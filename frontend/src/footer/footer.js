import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Twitter, Github } from 'react-bootstrap-icons';

class footer extends React.Component {
     render(){
          return(
          <div className='footer'>
               <Container>
               <Row>
                    <Col className='left'>Copyright &copy; 2021 Nile Google Developers Club, Abuja</Col>
                    <Col className='right'>Contact us  <span><Twitter color='#9EB3C2' /></span>  <span>{<Github color='#9EB3C2 '/>}</span></Col>
               </Row>
               </Container>
              
          </div>
          )
     }
}
export default footer;