import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './DummyPage'
import Resume from './Vinayak_Malik_Resume (1).pdf'
export default class Inbound extends Component {
  render() {
    return (


      <div>

      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Resume:</Card.Title>


        </Card.Body>

      </Card>

      <iframe src={Resume} width="100%" height="600px">
         </iframe>


</div>
)
}
}
