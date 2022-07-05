import React, { Component } from "react";
import Fieldset from "./Fieldset";
import FieldsetEditable from "./FieldsetEditable";

class SkillColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    };

    this.onSkillEdit = this.onSkillEdit.bind(this);
  }

  onSkillEdit(input, index) {
    const skillsArray = this.state.skills;
    const currentElement = skillsArray[index];

    this.setState({
      currentElement: input.target.value,
    });
  }

  render() {
    const editing = this.props.editing;
    const { skills } = this.state;
    const keyValues = ["1", "2", "3", "4"];

    return editing ? (
      <FieldsetEditable
        editing={editing}
        keyValues={keyValues}
        textContents={skills}
        onSkillEdit={this.onSkillEdit}
      />
    ) : (
      <Fieldset editing={editing} keyValues={keyValues} textContents={skills} />
    );
  }
}

export default SkillColumn;
