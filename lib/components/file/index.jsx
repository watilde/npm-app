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

export default class extends Component {
  render () {
    return (
      <div style={divStyle}>
        <Box label='package.json' padding='10px'>
          <Text>
            {this.props.file.valid ? (this.props.file.path) : ('/path/to/package.json')}
          </Text>
        </Box>
        <Button color='white' style={buttonStyle} onClick={this.props.onClickFile}>
          Choose file
        </Button>
        <input id='file__pick' type='file' style={inputStyle} onChange={this.props.onChangeFile} />
      </div>
    )
  }
}
