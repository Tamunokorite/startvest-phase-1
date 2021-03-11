import React from 'react';
import './profile.css';
import {Container, Row, Col, Form, Spinner, Button} from 'react-bootstrap';
import TeamPic from '../images/team_3.svg';
import {Github, Google, Facebook} from 'react-bootstrap-icons';
import {FaMicrosoft} from 'react-icons/fa';

class profile extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
             user: [],
             authenticated: false
          //User is the current signed in user profile sent from the database
          })
        }

     //   Render the User Profile if exist or in session
     userProfile  = () =>{
          return(
               <div>
                    <h3>Welcome User</h3>
               </div>
          )
     }
     
     //   Render the login screen
     login = () =>{
          return(
               <div>
                    <Container  className='form '> 
                         <Row className='form_box shadow-lg'>
                              <Col className='svgIcon'><img src={TeamPic} height={400} width={400} alt="Team pic svg"/></Col>
                              <Col className='form_items'>
                                   <h2>Login</h2>
                              <Form >
                                   <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                             <Form.Label>Email</Form.Label>
                                             <Form.Control className='shadow-sm textbox' type="email" placeholder="Enter email" />
                                        </Form.Group>
                                   </Form.Row>

                                   <Form.Row>
                                        <Form.Group as={Col} controlId="formHorizontalPassword">
                                        <Form.Label  > Password</Form.Label>
                                        <Form.Control className='shadow-sm textbox' type="password" placeholder="Password" />
                                        </Form.Group>
                                   </Form.Row>

                                   
                                   <Form.Group as={Row} controlId="formHorizontalCheck">
                                        <Col>
                                         <Form.Check  label="Remember me" />
                                        </Col>
                                        <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                   </Form.Group>
                                   
                                   <Form.Group as={Row} controlId="formHorizontalAltLogin">
                                        <Col><Form.Label >Login with:</Form.Label></Col>
                                        <Col><Github className='icons'/></Col>
                                        <Col><Google className='icons'/></Col>
                                        <Col><Facebook className='icons'/></Col>
                                        <Col><FaMicrosoft className='icons'/></Col>
                                   </Form.Group>

                                   <Form.Group as={Row}>
                                    <Col className='submit'>
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                   </Form.Group>

                                   <Form.Group as={Row}>
                                        <Col>
                                             Don't have an account <span className='forgot'>Sign Up!</span>
                                        </Col>
                                   </Form.Group>
                              </Form>
                              </Col>
                         </Row>
                    </Container>
               </div>
          )
     }

      //   Render the signin screen
      Signin = () =>{
          return(
               <div>
                     <Container  className='form '> 
                         <Row className='form_box shadow-lg'>
                              <Col className='svgIcon'><img src={TeamPic} height={400} width={400} alt="Team pic svg"/></Col>
                              <Col className='form_items'>
                                   <h2>Login</h2>
                              <Form >
                                   <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                             <Form.Label>Email</Form.Label>
                                             <Form.Control className='shadow-sm textbox' type="email" placeholder="Enter email" />
                                        </Form.Group>
                                   </Form.Row>

                                   <Form.Row>
                                        <Form.Group as={Col} controlId="formHorizontalPassword">
                                        <Form.Label  > Password</Form.Label>
                                        <Form.Control className='shadow-sm textbox' type="password" placeholder="Password" />
                                        </Form.Group>
                                   </Form.Row>

                                   
                                   <Form.Group as={Row} controlId="formHorizontalCheck">
                                        <Col>
                                         <Form.Check  label="Remember me" />
                                        </Col>
                                        <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                   </Form.Group>
                                   
                                   <Form.Group as={Row} controlId="formHorizontalAltLogin">
                                        <Col >Login with:</Col>
                                        <Col><Github className='icons'/></Col>
                                        <Col><Google className='icons'/></Col>
                                        <Col><Facebook className='icons'/></Col>
                                        <Col><FaMicrosoft className='icons'/></Col>
                                   </Form.Group>

                                   <Form.Group as={Row}>
                                    <Col className='submit'>
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                   </Form.Group>

                                   <Form.Group as={Row}>
                                        <Col>
                                        
                                        </Col>
                                   </Form.Group>
                              </Form>
                              </Col>
                         </Row>
                    </Container>
               </div>
          )
     }

     // Render the 
     renderview(){   
          console.log(this.state.authenticated);        
          switch(this.state.authenticated){
              default: return <div><Spinner  animation='grow' color='#21295C'/></div>
                  case false: return this.login();
                  case true: return this.userProfile();
          }
      }
      
    
     render(){
          return(
          <div className="profile">
               Profile
               {this.renderview()}
          </div>
          )
     }
}
export default profile;