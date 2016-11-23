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
          background='black'
          padding='10px'
          horizontalAlignment='left'
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
