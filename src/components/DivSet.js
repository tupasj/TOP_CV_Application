import React, { Component } from "react";

class DivSet extends Component {
  render() {
    return (
      <div>
        <div className="field">Company</div>
        <div className="field">Position title</div>
        <div className="field">Main tasks</div>
        <div className="field">Date range</div>
      </div>
    );
  }
}

export default DivSet;
