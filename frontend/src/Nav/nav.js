import React from 'react';
import  {Navbar, Nav, }  from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersonCircle} from 'react-bootstrap-icons';


// Import the views
import Home from '../Home/home';
import About from '../About/about';
import Startups from '../Startups/startups';
import Investors from '../Investors/investors';
import Profile from '../Profile/profile';

class nav extends React.Component {
     render() {
          return(
               <div className='navigation'>
               <Router>
               <Navbar collapseOnSelect expand="lg" bg="light" sticky='top'>
               <Navbar.Brand href="/">Startvest logo</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto navitems ">
                   <Nav.Link active className='Navlinks' href="/" >Home</Nav.Link>
                   <Nav.Link active className='Navlinks' href="/about">About Us</Nav.Link>
                   <Nav.Link active className='Navlinks' href="/startups">Startups</Nav.Link>
                   <Nav.Link active className='Navlinks' href="/investors">Investors</Nav.Link>
                   <Nav.Link active className='Navlinks' href="/profile"><PersonCircle /></Nav.Link>
                 </Nav>
                 {/* <Nav >     
                   <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                 </Nav> */}
               </Navbar.Collapse>
             </Navbar>
             <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/about">
                    <About/>
                  </Route>
                  <Route exact path="/startups">
                    <Startups/>
                  </Route>
                  <Route exact path="/investors">
                    <Investors/>
                  </Route>
                  <Route exact path="/profile">
                    <Profile/>
                  </Route>
             </Switch>
             </Router>
             </div>
          )
     }
}

export default nav;