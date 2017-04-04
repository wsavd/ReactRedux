import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item1 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/item0">Item0</Link></li>
        </ul>
        <hr/>
        Item1
      </div>
    );
  }
}