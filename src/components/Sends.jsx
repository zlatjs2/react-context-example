import React, { Component } from 'react';
import { useSample } from '../contexts/sample';

/* 값을 설정시킬 폼 */
class Sends extends Component {
  state = {
    input: ""
  };

  componentDidMount() {
    this.setState({
      input: this.props.value
    });
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.setValue(this.state.input);
  }

  render() {
    const { input } = this.state;
    return (
      <form onSumbit={this.handleSubmit}>
        <input type="text" value={input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    );
  }
}

export default useSample(Sends);
