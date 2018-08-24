import React, { Component } from 'react'
import { View, Text, Button } from 'react-desktop/macOs'
import Select from 'react-select'

const selectStyle = {
  width: '100%'
}

const divStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const buttonStyle = {
  height: '36px',
  marginLeft: '10px'
}

export default class extends Component {
  constructor () {
    super()
    this.script = ''
  }

  render () {
    return (
      <div>
        <div style={divStyle}>
          <Select
            id='runScript__select'
            options={this.getScripts(this.props.file.value.scripts)}
            wrapperStyle={selectStyle}
          />
          <Button color='white' style={buttonStyle}>
            Run
          </Button>
        </div>
        <View
          background='black'
          padding='10px'
          horizontalAlignment='left'
          marginTop='10px'
        >
          <Text color='lime'>{this.runScript(this.script)}</Text>
        </View>
      </div>
    )
  }

  runScript (script) {
    if (!script) return '$'
    console.log(script)
  }

  getScripts (scripts) {
    if (scripts.length === 0) return []
    return Object.keys(scripts).map(function (key) {
      return {
        value: scripts[key],
        label: key + ': ' + scripts[key]
      }
    })
  }
}
