import React, { Component } from 'react'
import File from './file/index.jsx'
import List from './list/index.jsx'
import Hr from './hr.jsx'

function MainView (props) {
  return (
    <div>
      <File {...props} />
      <Hr />
      <List {...props} />
    </div>
  )
}

export default MainView
