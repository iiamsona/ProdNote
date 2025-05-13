import React from 'react';
import { ChromePicker } from 'react-color';

export default class ColorPicker extends React.Component {
  state = {
    background: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.rgb });
  };

  render() {
    return (
      <ChromePicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}
