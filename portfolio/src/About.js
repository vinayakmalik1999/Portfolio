import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './DummyPage'
export default class About extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>About</Card.Title>


        </Card.Body>

      </Card>

<DummyPage/>


</div>
)
}
}
