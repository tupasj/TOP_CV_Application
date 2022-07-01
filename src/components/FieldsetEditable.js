import React, { Component } from "react";

class FieldsetEditable extends Component {
  render() {
    const keyValues = this.props.keyValues;
    const onFieldEditMethods = this.props.onFieldEditMethods;
    const inputs = this.props.textContents.map((text, index) => (
      <input
        key={keyValues[index]}
        value={text}
        onChange={onFieldEditMethods[index]}
      ></input>
    ));

    return (
      <form className="fieldset-editable">
        {inputs}
      </form>
    );
  }
}

export default FieldsetEditable;