import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Carousel from 'react-bootstrap/Carousel';
import Img from './responsive-design.png'
import { FaCopyright,FaChevronUp } from "react-icons/fa";
import { FaGithub,FaGlobeAmericas} from "react-icons/fa";
import {IconContext} from 'react-icons';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default class Projects extends Component {
  render() {
    return (


      <div>
      <br/><br/><br/>
      <Row>
<Col>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Projects</Card.Title>


        </Card.Body>

      </Card>
      </Col>
      </Row>
      <Row>
      <Col xs={12} sm={6} md={4} >
<Card border="light">
<Carousel >
<img variant="top" alt='React PWA Barcode Reader'src={Img} />
<img variant="top" alt='React PWA Barcode Reader11'src="holder.js/100px180" />
<img variant="top" alt='React PWA Barcode Reader22'src="holder.js/100px180" />

</Carousel>
  <Card.Body>
    <Card.Title>Barcode Reader PWA</Card.Title>
    <Card.Text>
  A Barcode Reader Progressive Web App built with React, for a Warehouse Management System.
    </Card.Text>
  </Card.Body>
  <ListGroup >
 <Row>
 <Col xs={6} style={{'padding-right':'0'}}>
  <Button block disabled variant="dark" style={{'background-color':'#000000'}}>  <IconContext.Provider value={{ color: "#ffffff"  }}>
    <FaGithub/>
    </IconContext.Provider>  Code</Button>
  </Col>
  <Col xs={6} style={{'padding-left':'0'}}>
  <Button block variant="dark" style={{'background-color':'#000000'}}><IconContext.Provider value={{ color: "#ffffff"  }}>
    <FaGlobeAmericas/>
    </IconContext.Provider>   Demo</Button>
      </Col>

   </Row>


 </ListGroup>
</Card>
</Col>

<Col xs={12} sm={6} md={4} >
<Card border="light">
<Card.Img variant="top" alt='React PWA Barcode Reader'src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Offline Form App</Card.Title>
  <Card.Text>
  A Progressive Web App having offline functional forms and lists.
  </Card.Text>

</Card.Body>

<Row>
<Col xs={6} style={{'padding-right':'0'}}>
 <Button block variant="dark" style={{'background-color':'#000000'}} >
 <IconContext.Provider value={{ color: "#ffffff"  }}>
   <FaGithub/>
   </IconContext.Provider>  Code</Button>
 </Col>
 <Col xs={6} style={{'padding-left':'0'}}>
 <Button block disabled variant="dark" style={{'background-color':'#000000'}} ><IconContext.Provider value={{ color: "#ffffff"  }}>
   <FaGlobeAmericas/>
   </IconContext.Provider>  Demo</Button>
     </Col>

 </Row>



</Card>

</Col>
  <Col xs={12} sm={6} md={4} >
<Card border="light">
  <Card.Img variant="top" alt='React PWA Barcode Reader'src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Universal Chat App</Card.Title>
    <Card.Text>
      A Chat App Progressive Web App. 'Universal' due to cross-platform installability. Built with ReactJS and Sockets.IO
    </Card.Text>

  </Card.Body>
  <ListGroup >
 <Row>
 <Col xs={6} style={{'padding-right':'0'}}>
  <Button block variant="dark" style={{'background-color':'#000000'}}>
  <IconContext.Provider value={{ color: "#ffffff"  }}>
    <FaGithub/>
    </IconContext.Provider>  Code</Button>
  </Col>
  <Col xs={6} style={{'padding-left':'0'}}>
  <Button block variant="dark" style={{'background-color':'#000000'}}><IconContext.Provider value={{ color: "#ffffff"  }}>
    <FaGlobeAmericas/>
    </IconContext.Provider>  Demo</Button>
      </Col>

   </Row>


 </ListGroup>
</Card>

</Col>
</Row>
<br/><br/>
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
