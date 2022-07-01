import React, { Component } from "react";

class PersonalInfoContents extends Component {
  render() {
    const keyValues = this.props.keyValues;
    const fields = this.props.textContents.map((text, index) => (
      <div key={keyValues[index]} className="field">{text}</div>
    ));
    const onEditStart = this.props.onEditStart;

    return (
      <div className="fieldset">
        <button className="edit-btn" onClick={onEditStart}>Edit</button>
        {fields}
      </div>
    );
  }
}

export default PersonalInfoContents;
