import React, { Component } from "react";
import SkillColumn from "./SkillColumn";
import DivSet from "./DivSet";

class Contents extends Component {
  render() {
    const editing = this.props.editing;
    const type = this.props.type;
    const quantity = this.props.quantity;

    const numbers = [];
    for (let i = 0; i < quantity; i++) {
      numbers.push(i);
    }

    if (type === "list") {
      return numbers.map((number) => <SkillColumn key={number} editing={editing} />);
    } else {
      return numbers.map((number) => <DivSet key={number} />);
    }
  }
}

export default Contents;
