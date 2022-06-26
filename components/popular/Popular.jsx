import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import './style.css';

class Popular extends Component {
  render() {
    return (
      <div className="popular">
        <h3>What's Popular</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Popular;
