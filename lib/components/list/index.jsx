import React, { Component } from 'react'
import { Text, SegmentedControl, SegmentedControlItem } from 'react-desktop/macOs'
import Outdated from './outdated.jsx'
import RunScript from './run-script.jsx'

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
      this.renderItem(1, 'run-script', <RunScript />),
      this.renderItem(2, 'outdated', <Outdated />)
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
