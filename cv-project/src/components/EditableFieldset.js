import React, { Component } from "react";

class EditableFieldset extends Component {
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
    const onEditFinish = this.props.onEditFinish;

    return (
      <form className="editable-fieldset">
          <button className="edit-btn" onClick={onEditFinish}>
            Finish editing
          </button>
        {inputs}
      </form>
    );
  }
}

export default EditableFieldset;
