import React, { Component } from "react";

class Fieldset extends Component {
  render() {
    const textContents = this.props.textContents;
    const keyValues = this.props.keyValues;
    const fields = textContents.map((text, index) => (
      <li key={keyValues[index]} className={text ? "field" : "hidden"} >{text}</li>
    ));

    return (
      <div className="fieldset">
        <ul>
            {fields}
        </ul>   
      </div>
    );
  }
}

export default Fieldset;
