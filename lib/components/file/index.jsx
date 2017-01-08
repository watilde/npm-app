import React, { Component } from 'react'
import { Box, Text, Button } from 'react-desktop/macOs'

const divStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const buttonStyle = {
  height: '38px',
  marginLeft: '10px',
  marginTop: '13px'
}

const inputStyle = {
  display: 'none'
}

function FileView (props) {

  return (
    <div style={divStyle}>
      <Box label='package.json' padding='10px'>
        <Text>
          {props.file.valid ? (props.file.path) : ('/path/to/package.json')}
        </Text>
      </Box>
      <Button color='white' style={buttonStyle} onClick={props.onClickFile}>
        Choose file
      </Button>
      <input id='file__pick' type='file' style={inputStyle} onChange={props.onChangeFile} />
    </div>
  )
}

export default FileView
