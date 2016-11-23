import React, { Component } from 'react'
import File from './file/index.jsx';
import List from './list/index.jsx';
import Hr from './hr.jsx';

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <File></File>
        <Hr />
        <List></List>
      </div>
    );
  }
}
