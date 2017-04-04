import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item0 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/item1">Item1</Link></li>
        </ul>
        <hr/>
        Item0
      </div>
    );
  }
}