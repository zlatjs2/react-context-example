import React, { Component } from 'react';
import Receives from './Receives';


/* Receives 를 보여줌 */
class RightPane extends Component {
  render() {
    return (
      <div className="pane">
        <Receives />
      </div>
    );
  }
}

export default RightPane;
