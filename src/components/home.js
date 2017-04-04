import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
       <div>
        <ul>
          <li><Link to="/item0">Item0</Link></li>
          <li><Link to="/item1">Item1</Link></li>
        </ul>
        <hr/>
        Home
      </div>
    );
  }
}