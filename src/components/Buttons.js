import React, { Component } from "react";

class Buttons extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editing: props.editing
        }
    }

  EditBtn = () => {
    const toggleState = () => {
      this.setState({
        editing: true
      })
    };

    return <button onClick={toggleState}>Edit</button>;
  };

  SubmitBtn = () => {
    const toggleState = () => {
      this.setState({
        editing: false
      })
    };

    return <button onClick={toggleState}>Finish editing</button>;
  };

  render() {
    const { editing } = this.state;
    const btn = editing ? this.SubmitBtn() : this.EditBtn();

    return btn;
  }
}

export default Buttons;
