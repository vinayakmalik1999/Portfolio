import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { GiCogLock,GiProcessor,GiPowerLightning } from "react-icons/gi";
import {IconContext} from 'react-icons';
import './About.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Container from 'react-bootstrap/Container'
import Responsive from './responsive-design.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaCopyright,FaChevronUp } from "react-icons/fa";

export default class About extends Component {
  render() {
    return (


      <div>
      <br/>

      <br/><br/><br/><br/>

      <Card  border="light" className="text-center">

        <Card.Body>
          <Card.Title class='title'>About</Card.Title>

        </Card.Body>

      </Card>
      <br/><br/><br/>
      <Card  border="light" className='efficiencyCard'>
    <Container>
      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
      <Card.Title class='efficiencyCardTitle'>Progressive</Card.Title>
      </ScrollAnimation>
      <Card.Body>
      <ScrollAnimation animateIn='zoomIn' animateOnce={true}>

      <Row>

      <Col xs ={9} className="effText">I specialize in creating Progressive Web Apps, all my websites (including this one) can work without an internet connection and can also be installed like an app
    </Col>


      <Col xs ={3}>
      <IconContext.Provider value={{ color: "#000000", className: "IconAbout",size: '5em' }}>
      <GiProcessor/>
      </IconContext.Provider>

      </Col>
        </Row>
        </ScrollAnimation>

      </Card.Body>
        </Container>
      </Card>
    <br/><br/>
  <Card  border="light" className='efficiencyCard'>
<Container>
  <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
  <Card.Title class='efficiencyCardTitle'>Efficient</Card.Title>
  </ScrollAnimation>
  <Card.Body>
  <ScrollAnimation animateIn='zoomIn' animateOnce={true}>

  <Row>

  <Col xs ={9} className="effText"><strong>Maximum</strong> gain,<strong> Minimum </strong>code. Finding the most efficient and simple way to solve both logical and design problems is my coding mantra
</Col>


  <Col xs ={3}>
  <IconContext.Provider value={{ color: "#000000", className: "IconAbout",size: '5em' }}>
  <GiCogLock/>
  </IconContext.Provider>

  </Col>
    </Row>
    </ScrollAnimation>

  </Card.Body>
    </Container>
  </Card>
<br/><br/>



<Card  border="light" className='efficiencyCard'>
<Container>
<ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
<Card.Title class='efficiencyCardTitle'>Responsive</Card.Title>
</ScrollAnimation>
<Card.Body>
<ScrollAnimation animateIn='zoomIn' animateOnce={true}>

<Row>

<Col xs ={9} className="effText">My website design layouts will work on any device, be it a 100 inch projector screen or a 5 inch phone screen
</Col>


<Col xs ={3}>
<img src={Responsive}  alt='' className='responsiveImage'/>

</Col>
  </Row>
  </ScrollAnimation>

</Card.Body>
  </Container>
</Card>
<br/><br/>

<Card  border="light" className='efficiencyCard'>
<Container>
<ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
<Card.Title class='efficiencyCardTitle'>Fast</Card.Title>
</ScrollAnimation>
<Card.Body>
<ScrollAnimation animateIn='zoomIn' animateOnce={true}>

<Row>

<Col xs ={9} className="effText">Fast website load times and lag free UI is highest on my checklist while creating a website. Efficient caching stratergies takes this a step further
</Col>


<Col xs ={3}>
<IconContext.Provider value={{ color: "#000000", className: "IconAbout",size: '5em' }}>
<GiPowerLightning/>
</IconContext.Provider>

</Col>
  </Row>
  </ScrollAnimation>

</Card.Body>
  </Container>
</Card>


<br/><br/><br/>
<Navbar className='BottomNavbar' style={{'background-color':'#000000'}}  variant="dark"  >
<Navbar.Brand>
<IconContext.Provider value={{ color: "#ffffff" }}>
<FaCopyright/>
</IconContext.Provider>
    {' Vinayak Malik'}
  </Navbar.Brand>

  <div className ='footer'>
  Created my free logo at <a className ='footer' href = 'https://www.logomakr.com' target='_blank' rel="noopener noreferrer">LogoMakr.com</a>
  </div>
<Nav className="ml-auto">
<a href ='#top'>
<IconContext.Provider value={{ color: "#ffffff" }}>
<FaChevronUp/>
</IconContext.Provider>
</a>
</Nav>
</Navbar>
</div>
)
}
}
