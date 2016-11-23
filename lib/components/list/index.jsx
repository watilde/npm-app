import React, { Component } from 'react'
import { View, SegmentedControl, SegmentedControlItem, Text, Button } from 'react-desktop/macOs'
import Select from 'react-select'

const options = [
  { value: 'one', label: 'npm run build' },
  { value: 'two', label: 'Two' }
]

const divStyle = {
  display: 'flex'
}

const buttonStyle = {
  height: '36px',
  marginLeft: '10px'
}

export default class extends Component {
  constructor () {
    super()
    this.state = { selected: 1 }
  }

  render () {
    return (
      <SegmentedControl box>
        {this.renderItems()}
      </SegmentedControl>
    )
  }

  renderItems () {
    return [
      this.renderItem(1, 'run-script',
      <div>
        <div style={divStyle}>
          <Select
            name="form-field-name"
            value="one"
            options={options}
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
      ),
      this.renderItem(2, 'outdated', <Text>Content 2</Text>)
    ]
  }

  renderItem (key, title, content) {
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControlItem>
    )
  }
}
