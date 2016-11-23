import React, { Component } from 'react'
import { Box, Text, Button } from 'react-desktop/macOs'

const divStyle = {
  display: 'flex'
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
        <Box label='Project root' padding='10px'>
          <Text>/Users/daijiro/Development/Intl.js</Text>
        </Box>
        <Button color='white' style={buttonStyle} marginTop='13px' onClick={this.pickFile}>
          Choose file
        </Button>
        <input id='file' type='file' style={inputStyle} />
      </div>
    )
  }
  pickFile () {
    document.getElementById('file').click()
  }
}
