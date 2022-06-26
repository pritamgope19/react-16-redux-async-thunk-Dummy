import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as creators from '../../store/actions/ActionCreator';

export default function () {
  const { media_type, setMedia_type } = useState('all');
  const { time_window, setTime_window } = useState('day');

  const trending = useSelector((state) => {
    return state.trending;
  });
  const dispatch = useDispatch();
  console.log('media_type', media_type, time_window);

  dispatch(creators.getTrending(`trending/${media_type}/${time_window}`));
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
