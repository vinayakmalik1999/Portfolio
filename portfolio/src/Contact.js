import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { MdPhoneInTalk } from "react-icons/md";
import {IconContext} from 'react-icons';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollAnimation from 'react-animate-on-scroll';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { FaCopyright,FaChevronUp } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default class Contact extends Component {
  constructor(props){
    super(props);
  this.state={
    emailValue:'',
    nameValue:'',
    messageValue:'',
  }
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handleMessageChange = this.handleMessageChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleNameChange(event){

    this.setState({nameValue:event.target.value});

  }
  handleEmailChange(event){
      this.setState({emailValue:event.target.value});
  }
  handleMessageChange(event){
    this.setState({messageValue:event.target.value});

  }
  handleSubmit(event){
    event.preventDefault();
   axios({
         method: "POST",
         url:"http://localhost:3002/send",
         data: {
             name: this.state.nameValue,
             email: this.state.emailValue,
             messsage: this.state.messageValue
         }
      }).then((response) =>{
        alert('Message Sent!')

        this.setState({  emailValue:'',
          nameValue:'',
          messageValue:''})

      })
      .catch((error) =>{
        console.log(error)
        alert('oops something went wrong! please try again!')
      })


  }

  render() {
    return (


      <div>
      <br/>
      <br/>
      <br/>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Contact</Card.Title>


        </Card.Body>

      </Card>
      <Card  border="light" className='efficiencyCard'>
      <Container>
      <ScrollAnimation animateIn='flipInX' animateOnce={true}>
      <Card.Title class='efficiencyCardTitle'>Let's talk</Card.Title>
      </ScrollAnimation>
      <Card.Body>
      <ScrollAnimation animateIn='zoomIn' animateOnce={true}>

      <Row>

      <Col xs ={9} className="ContactText">If you want to get in touch
        fill up the form below or send an email to
        &nbsp;
        <a href='mailto:vinayakmalik1999@gmail.com'>
         vinayakmalik1999@gmail.com
        </a>
        &nbsp;

         and we shall ~talk.
      </Col>


      <Col xs ={3}>
      <IconContext.Provider value={{ color: "#000000", className: "IconAbout",size: '5em' }}>
      <MdPhoneInTalk/>
      </IconContext.Provider>

      </Col>
        </Row>
        </ScrollAnimation>

      </Card.Body>
        </Container>
      </Card>
      <br/>

<Container>
<ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
      <Form onSubmit ={this.handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com"  value = {this.state.emailValue} onChange={this.handleEmailChange} required/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Name</Form.Label>
    <Form.Control type='text'  placeholder='e.g. John Smith'  value = {this.state.nameValue} onChange={this.handleNameChange} required/>

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows="3"  value = {this.state.messageValue} onChange={this.handleMessageChange}required/>
  </Form.Group>
  <Button variant="dark" type="submit" active>
    Submit
  </Button>
</Form>
</ScrollAnimation>
</Container>
<br/>
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
