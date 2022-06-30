import React, { Component } from "react";

class Fieldset extends Component {
  render() {
    const fields = this.props.textContents.map((text) => (
      <div key={text} className="field">{text}</div>
    ));

    return (
      <div className="fieldset">
        {fields}
      </div>
    );
  }
}

export default Fieldset;
