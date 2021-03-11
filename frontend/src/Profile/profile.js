import React from 'react';
import './profile.css';
import {Container, Row, Col, Form} from 'react-bootstrap';
import TeamPic from '../images/team_3.svg';



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
                    <Container  className='form'> 
                         <Row className='form_box'>
                              <Col className='svgIcon'><img src={TeamPic} height={400} width={400} alt="Team pic svg"/></Col>
                              <Col className='form_items'>
                                   <h2>Login</h2>
                                   <Form>
                                        <p>Log in to our site</p>
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
                    <h3>Sign Up</h3>
               </div>
          )
     }

     // Render the 
     renderview(){   
          console.log(this.state.authenticated);        
          switch(this.state.authenticated){
              default: return <h2>Loading.....</h2>
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