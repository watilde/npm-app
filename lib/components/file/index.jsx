import React, { Component } from 'react'
import { Box, Text, Button } from 'react-desktop/macOs'

const divStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const buttonStyle = {
  height: '38px',
  marginLeft: '10px'
}

const inputStyle = {
  display: 'none'
}

export default class extends Component {
  render () {
    return (
      <div style={divStyle}>
        <Box label='package.json' padding='10px'>
          <Text id='file__path'>/path/to/package.json</Text>
        </Box>
        <Button color='white' style={buttonStyle} marginTop='13px' onClick={this.pickFile}>
          Choose file
        </Button>
        <input id='file__pick' type='file' style={inputStyle} onChange={this.readFile} />
      </div>
    )
  }
  pickFile () {
    document.getElementById('file__pick').click()
  }
  readFile () {
    var file = document.getElementById('file__pick').files[0]
    var path = file.path
    console.log(path)
  }
}
