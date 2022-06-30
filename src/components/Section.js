import React, { Component } from "react";
import Fieldset from "./Fieldset";
import EditableFieldset from "./EditableFieldset";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      email: 'Email',
      phone: 'Phone #',
      summary: 'Write your summary here.'
    };

    this.onEditStart = this.onEditStart.bind(this);
    this.onEditFinish = this.onEditFinish.bind(this);
  }

  onEditStart() {
    this.setState({
      editing: true
    })
  }

  onEditFinish() {
    this.setState({
      editing: false
    })
  }

  onFieldEdit() {
    this.setState({

    })
  }

  render() {
    const { editing } = this.state;
    const { email, phone, summary } = this.state;
    const textContents = [ email, phone, summary ];

    return (
      <section>
        <div className="first-line">
          <h1>Some Name</h1>
          {editing ? <button onClick={this.onEditFinish}>Finish editing</button> : <button onClick={this.onEditStart}>Edit</button>}
        </div>
        <h2>Occupation</h2>
        {editing ? <EditableFieldset /> : <Fieldset textContents={textContents} />}
      </section>
    );
  }
}

export default Section;
