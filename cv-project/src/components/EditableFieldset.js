import React, { Component } from "react";

class EditableFieldset extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    //Return an array with the new text values, which is passed as a prop
    //to the render component that uses those values
    //Change parent state to not editing
  };

  render() {
    return (
      <form className="editable-fieldset" onSubmit={this.handleSubmit}>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EditableFieldset;