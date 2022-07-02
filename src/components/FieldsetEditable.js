import React, { Component } from "react";

class FieldsetEditable extends Component {
  render() {
    const keyValues = this.props.keyValues;
    const onSkillEdit = this.props.onSkillEdit;
    const inputs = this.props.textContents.map((text, index) => (
      <input
        key={keyValues[index]}
        value={text}
        onChange={onSkillEdit}
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
