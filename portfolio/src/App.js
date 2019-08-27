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
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoMakr_2uSucr from './LogoMakr_2uSucr.png'
import { Offline } from 'react-detect-offline'
import { MdSignalWifiOff } from "react-icons/md";
import {IconContext} from 'react-icons';

class App extends Component  {

  render(){
  return (
    <div>
<Router>
    <Navbar className='topNavbar' style={{'background-color':'#000000'}}collapseOnSelect variant="dark" fixed ='top' expand="md">
       <Navbar.Brand style={{padding:'0','margin-left':'-27px'}}>
       <Link to ='/'style ={{textDecoration: 'none',  color: '#ffffff'}} >
         <img
           alt="LOGO"
           src={LogoMakr_2uSucr}
           width="125"
           height="56.3"
           className="d-inline-block align-top"
         />
         </Link>
       </Navbar.Brand>
       <Offline>
       <Navbar.Brand>
       <IconContext.Provider value={{ color: "#747474", className: "OfflineIcon",size: '2em' }}>
       <MdSignalWifiOff/>
       </IconContext.Provider>
     </Navbar.Brand>

       </Offline>
       <Navbar.Toggle style={{'border-color':'transparent', outline:'transparent'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="ml-auto">
       <br/>
<Link to ='/About'style ={{'font-size':'1.2rem',textDecoration: 'none',  color: '#ffffff'}} > <Nav.Link href="/About">About </Nav.Link></Link>
<br/>
    <Link to ='/Projects'style ={{'font-size':'1.2rem',textDecoration: 'none',  color: '#fff'}} > <Nav.Link href="/Projects">Projects</Nav.Link></Link>
    <br/>
    <Link to ='/Contact'style ={{'font-size':'1.2rem',textDecoration: 'none',  color: '#fff'}} > <Nav.Link href="/Contact">Contact</Nav.Link></Link>
    <br/>
   <Nav.Link href="https://uwprod-my.sharepoint.com/:b:/g/personal/vmalik4_wisc_edu/EeNGmh-UMFRFrSqshkaw6EwBpUieXs91kad4-aM0sRgS3g?e=RIlEdA" style ={{'font-size':'1.2rem',textDecoration: 'none'}} target="_blank" rel='noreferrer'>Résume</Nav.Link>
    <br/>

       </Nav>
       </Navbar.Collapse>

     </Navbar>


<Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/About" component={About}/>
 <Route path ="/Projects" component ={Projects}/>
 <Route path ="/Contact" component ={Contact}/>

</Switch>

</Router>

</div>

  );
}
}

export default App;
