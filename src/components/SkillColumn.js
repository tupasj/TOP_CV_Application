import React, { Component } from "react";
import Fieldset from "./Fieldset";
import FieldsetEditable from "./FieldsetEditable";

class SkillColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: ["Skills column", "b", "C", "d"],
    };

    this.onSkillEdit = this.onSkillEdit.bind(this);
  }

  // onSkillEdit = (i) => {
  //   this.setState((state) => {
  //     const updatedArray = state.skills.map((skill, j) => {
  //       if (j === i) {
  //         return skill.target.value;
  //       } else {
  //         return skill;
  //       }
  //     });

  //     return {
  //       updatedArray,
  //     };
  //   });
  // };

  onSkillEdit(input) {
    this.setState({
      skills: input.target.value,
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
