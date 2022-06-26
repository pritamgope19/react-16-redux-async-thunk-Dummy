import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import './style.css';

class Popular extends Component {
  render() {
    return (
      <div className="popular">
        <div className="whatsPopular">
          <div>
            <h3>What's Popular</h3>
          </div>
          <div className="selectList">
            <a className="selected">Streaming</a>
            <a>On TV</a>
            <a>For Rent</a>
            <a>In Theaters</a>
          </div>
        </div>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
          />
          <Card.Body>
            <Card.Title>The Shawshank Redemption</Card.Title>
            <Card.Text>1994-09-23</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Popular;
