import React from 'react';
import './profile.css';
import {Container, Row, Col, Form, Spinner, Button} from 'react-bootstrap';

import {Github, Google, Facebook} from 'react-bootstrap-icons';


// SVG Images used
// import TeamPic from '../images/team_3.svg';
import Login from '../images/login.svg';
import SignUp from '../images/sign_in.svg';

class profile extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
             user: [],
             authenticated: false,
          //User is the current signed in user profile sent from the database

          // Login or signup
             signup: true
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
                              <Col className='svgIcon'><img src={Login} height={400} width={400} alt="Team pic svg"/></Col>
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
                                   
                                   
                                   <Form.Group as={Row}>
                                    <Col className='submit'>
                                        <Button type="submit">Login</Button>
                                    </Col>
                                   </Form.Group>

                                   {this.altLogin(false)}
                                   
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
                              <Col className='svgIcon'><img src={SignUp} height={400} width={400} alt="Team pic svg"/></Col>
                              <Col className='form_items'>
                                   <h2>Sign Up</h2>
                              <Form >
                                   <fieldset>
                                   <Form.Row className='user_type'>
                                        <Col><Form.Check type='radio'  label="Startup" /></Col>
                                        <Col><Form.Check type='radio'  label="Investor" /></Col>
                                        <Col><Form.Check type='radio' label="Neither" /></Col>
                                   </Form.Row>
                                   </fieldset>


                                   <Form.Row>
                                        <Form.Group as={Col} controlId="formHorizontalPassword">
                                        <Form.Label  > Username</Form.Label>
                                        <Form.Control className='shadow-sm textbox' type="text" placeholder="Enter username" />
                                        </Form.Group>
                                   </Form.Row>


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
                                   
                                   <Form.Group as={Row}>
                                        <Col className='submit'>
                                             <Button type="submit">Sign Up</Button>
                                        </Col>
                                   </Form.Group>
                                   
                                   {this.altLogin(true)}
                                   
                              </Form>
                              </Col>
                         </Row>
                    </Container>
               </div>
          )
     }

     altLogin = (signup = false) =>{
          return (
               <div>
                    <Form.Group as={Row} controlId="formHorizontalAltLogin">
                              <Col sm={4}>{(signup) ? 'Sign up with: ':'Login with: '}</Col>
                              <Col><Github className='icons'/></Col>
                              <Col><Google className='icons'/></Col>
                              <Col><Facebook className='icons'/></Col>
                    </Form.Group>
               

               {(signup) ? 
               <Form.Group as={Row}>
               <Col>
                    Already have an account? <span className='forgot' onClick={() => {this.setState({signup: false});}}>Login</span>
               </Col>
               </Form.Group>
               :
               <Form.Group as={Row}>
               <Col >
                    Don't have an account? <span className='forgot' onClick={() => {this.setState({signup: true});}}>Sign up</span>
               </Col>
               </Form.Group>
               }
               
               </div>
          )
     }

     // Render the 
     renderview(){   
          console.log(this.state.authenticated);        
          switch(this.state.authenticated){
              default: return <div><Spinner className="load" animation='border' color='#21295C'/></div>
                  case false: return (this.state.signup) ? this.Signin(): this.login();
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