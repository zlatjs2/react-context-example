import React, { Component } from 'react';
import Sends from './Sends';

/* Sends를 보여줌 */
class LeftPane extends Component {
  render() {
    return (
      <div className="pane">
        <Sends />
      </div>
    );
  }
}

export default LeftPane;