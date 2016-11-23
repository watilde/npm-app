import React, { Component } from 'react'
import { View, Text, Button } from 'react-desktop/macOs'
import Select from 'react-select'

const options = [
  { value: 'one', label: 'npm run build' },
  { value: 'two', label: 'Two' }
]

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
  render () {
    return (
      <div>
        <div style={divStyle}>
          <Select
            name='form-field-name'
            value='one'
            options={options}
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
          <Text color='lime'>
            > intl@1.2.4 build /Users/daijiro/Development/Intl.js<br />
            > npm run build:data && npm run build:lib && npm run build:dist<br />
            <br />
            <br />
            > intl@1.2.4 build:data /Users/daijiro/Development/Intl.js<br />
            > babel-node scripts/build-data<br />
          </Text>
        </View>
      </div>
    )
  }
}
