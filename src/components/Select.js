import React, {Component} from 'react';
import {bem, connectToContainer} from '../lib';

class Select extends Component {
  renderOption(attrs, i) {
    return (
      <option key={`option-${i}`} value={attrs.value}>
        {attrs.label}
      </option>
    );
  }

  renderField() {
    var options = (this.props.options || []).slice();

    for (let i = 0; i < options.length; i++) {
      let opt = options[i];
      if (typeof opt !== 'object') {
        options[i] = {
          label: opt,
          value: opt,
        };
      }
    }

    if (this.props.hasBlank) {
      options.unshift({label: '', value: ''});
    }

    return (
      <label className={bem('field')}>
        <span className={bem('field', 'title')}>{this.props.label}</span>

        <select
          value={this.fullValue}
          className={bem('field', 'control')}
          onChange={e => this.updatePlot(e.target.value)}
        >
          {options.map(this.renderOption)}
        </select>
      </label>
    );
  }
}

export default connectToContainer(Select);
