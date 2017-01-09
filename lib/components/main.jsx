import React, { Component } from 'react'
import File from './file/index.jsx'
import List from './list/index.jsx'
import Hr from './hr.jsx'

function MainView (props) {
  return (
    <div>
      <File {...props} />
      <Hr />
      {props.file.valid && <List {...props} />}
    </div>
  )
}

export default MainView
