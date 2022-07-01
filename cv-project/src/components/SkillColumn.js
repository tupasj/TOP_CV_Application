import React, { Component } from "react";
import Fieldset from "./Fieldset";
import FieldsetEditable from "./FieldsetEditable";

class SkillColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: props.editing,
      skills: ['Skills column', 'b', 'C', 'd']
    };

    this.onSkillEdit = this.onSkillEdit.bind(this);
  }

  onSkillEdit(input, index) {
    this.setState({
      skills: [index].input.target.value,
    });
  }

  render() {
    const { editing } = this.state;
    const { skills } = this.state;
    const keyValues = ["1", "2", "3", "4"];

    return editing ? (
      <FieldsetEditable
        keyValues={keyValues}
        textContents={skills}
      />
    ) : (
      <Fieldset
        keyValues={keyValues}
        textContents={skills}
      />
    );
  }
}

export default SkillColumn;
