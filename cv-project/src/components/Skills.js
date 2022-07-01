import React, { Component } from "react";
import Fieldset from "./Fieldset";
import FieldsetEditable from "./FieldsetEditable";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      skill1: 'Skills column',
      skill2: '',
      skill3: '',
      skill4: '',
    };

    this.onEditStart = this.onEditStart.bind(this);
    this.onEditFinish = this.onEditFinish.bind(this);
    this.onSkill1Edit = this.onSkill1Edit.bind(this);
    this.onSkill2Edit = this.onSkill2Edit.bind(this);
    this.onSkill3Edit = this.onSkill3Edit.bind(this);
    this.onSkill4Edit = this.onSkill4Edit.bind(this);
  }

  onEditStart() {
    this.setState({
      editing: true,
    });
  }

  onEditFinish() {
    this.setState({
      editing: false,
    });
  }

  onSkill1Edit(input) {
    this.setState({
      skill1: input.target.value,
    });
  }

  onSkill2Edit(input) {
    this.setState({
      skill2: input.target.value,
    });
  }

  onSkill3Edit(input) {
    this.setState({
      skill3: input.target.value,
    });
  }

  onSkill4Edit(input) {
    this.setState({
      skill4: input.target.value,
    });
  }

  render() {
    const { editing } = this.state;
    const { skill1, skill2, skill3, skill4 } = this.state;
    const keyValues = ["1", "2", "3", "4"];
    const textContents = [ skill1, skill2, skill3, skill4 ];
    const onFieldEditMethods = [
        this.onSkill1Edit,
        this.onSkill2Edit,
        this.onSkill3Edit,
        this.onSkill4Edit
    ];

    return (
      <section className="skills">
        {editing ? <button className="edit-btn" onClick={this.onEditFinish}>Finish editing</button> : <button className="edit-btn" onClick={this.onEditStart}>Edit</button>}
        <h2>Skills</h2>
        <div className="divider"></div>
        {editing ? (
          <FieldsetEditable
            keyValues={keyValues}
            textContents={textContents}
            onEditFinish={this.onEditFinish}
            onFieldEditMethods={onFieldEditMethods}
          />
        ) : (
          <Fieldset
            keyValues={keyValues}
            textContents={textContents}
            onEditStart={this.onEditStart}
          />
        )}
      </section>
    );
  }
}

export default Skills;