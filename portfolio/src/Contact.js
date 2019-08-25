import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './DummyPage'
export default class Contact extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Contact</Card.Title>


        </Card.Body>

      </Card>

<DummyPage/>
<footer>
  Created my free logo at  <a href = 'https://www.logomakr.com' target='_blank' rel="noopener noreferrer">LogoMakr.com</a>
</footer>

</div>
)
}
}
