import React, { Component, PropTypes } from 'react';
import 'src/helpers/componentStore';

export class TextBox extends Component {

  constructor(props) {
    super(props);
    this.value = _.get(props.obs, 'value');
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    if (this.value) {
      return {
        value: this.value,
      };
    }
    return undefined;
  }

  handleChange(e) {
    this.value = e.target.value;
  }

  render() {
    const defaultValue = _.get(this.props.obs, 'value');
    return (
      <input
        defaultValue={defaultValue}
        onChange={(e) => this.handleChange(e)}
        type="text"
      />
    );
  }
}

TextBox.propTypes = {
  metadata: PropTypes.object.isRequired,
  obs: PropTypes.object,
};

window.componentStore.registerComponent('text', TextBox);
