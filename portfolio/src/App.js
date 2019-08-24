import React,{ Component } from 'react';
import './App.css'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component  {

  render(){
  return (
    <div>
<Router>
    <Navbar style={{'background-color':'#000000'}}collapseOnSelect variant="dark" sticky='top' expand="md">
       <Navbar.Brand>
         <img
           alt=""

           width="30"
           height="30"
           className="d-inline-block align-top"
         />

       </Navbar.Brand>
       <Navbar.Toggle style={{'border-color':'transparent', outline:'transparent'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse style={{height:'100px'}} id="responsive-navbar-nav">
       <Nav className="mx-auto">
    <Link to ='/About'style ={{textDecoration: 'none',  color: '#fff'}} > <Nav.Link href="/About">About </Nav.Link></Link>
    <Link to ='/Projects'style ={{textDecoration: 'none',  color: '#fff'}} > <Nav.Link href="/Projects">Projects</Nav.Link></Link>
    <Link to ='/Contact'style ={{textDecoration: 'none',  color: '#fff'}} > <Nav.Link href="/Contact">Contact</Nav.Link></Link>
    <Link to ='/Resume'style ={{textDecoration: 'none',  color: '#fff'}} > <Nav.Link href="/Resume">Resume</Nav.Link></Link>

       </Nav>
       </Navbar.Collapse>

     </Navbar>

<Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/About" component={About}/>
 <Route path ="/Projects" component ={Projects}/>
 <Route path ="/Contact" component ={Contact}/>
 <Route path ="/Resume" component ={Resume}/>
</Switch>

</Router>
</div>

  );
}
}

export default App;
