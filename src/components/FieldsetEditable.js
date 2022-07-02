import React, { Component } from "react";

class FieldsetEditable extends Component {
  render() {
    const editing = this.props.editing;
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
        {console.log(editing)}
        {inputs}
      </form>
    );
  }
}

export default FieldsetEditable;
