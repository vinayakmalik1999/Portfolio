import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Projects extends Component {
  render() {
    return (


      <div>
      <br/><br/><br/><br/>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Projects</Card.Title>


        </Card.Body>

      </Card>
<Card border="light">
  <Card.Img variant="top" alt='React PWA Barcode Reader'src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card border="light">
  <Card.Img variant="top" alt='React PWA Barcode Reader'src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card><Card border="light">
  <Card.Img variant="top" alt='React PWA Barcode Reader'src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>




</div>
)
}
}
