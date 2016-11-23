import React, { Component } from 'react'
import { View, SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    return (
      <SegmentedControl box>
        {this.renderItems()}
      </SegmentedControl>
    );
  }

  renderItems() {
    return [
      this.renderItem(1, 'run-script',
        <View
          background="black"
          padding="20px"
          horizontalAlignment="center"
          verticalAlignment="center"
          width="200px"
          height="100px"
          >
          <Text color="white">Hello World</Text>
        </View>
      ),
      this.renderItem(2, 'outdated', <Text>Content 2</Text>)
    ];
  }

  renderItem(key, title, content) {
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControlItem>
    );
  }
}
