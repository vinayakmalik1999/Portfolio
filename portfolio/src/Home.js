import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Particles from 'react-particles-js';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";

import './Home.css'
export default class Home extends Component {
  render() {
    return (


      <div>


      <Particles height='-webkit-fill-available' width='-webkit-fill-available'  params={{
        "particles": {
          "number": {
            "value": 45,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 10,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false,
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}>
        </Particles>
        <Container>
        <Card bg='transparent' border='transparent' text='white' className='introCard' ><Card.Body><center>Hello, I'm <span className='name'>Vinayak Malik.</span><br/>
                I'm a Full-Stack Web Developer.

                </center>
                </Card.Body>
<Row>
<Col xs={12} sm={6}>
 <Link to ='/Projects'style ={{textDecoration: 'none',  color: '#ffffff'}} >
                <Button  className ='projectButton' variant="outline-secondary" size="lg" block>Check-Out My <b>Work  </b> </Button>
</Link>
</Col>
<Col xs={12} sm={6}>
<a  style={{color:'#6c757d'}} href='https://uwprod-my.sharepoint.com/:b:/g/personal/vmalik4_wisc_edu/EeNGmh-UMFRFrSqshkaw6EwBpUieXs91kad4-aM0sRgS3g?e=RIlEdA' target='_blank' rel='noopener noreferrer'>
                <Button variant="outline-secondary" size="lg" block>  View My <b>Resume</b>
                </Button>
                     </a>
</Col>
</Row>
        </Card>

        </Container>


</div>
)
}
}
