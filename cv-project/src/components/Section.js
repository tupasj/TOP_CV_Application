import React, { Component } from "react";
import SkillColumn from "./SkillColumn";
import lowercaseFirstLetter from "./utility/lowercaseFirstLetter";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }

    this.onEditStart = this.onEditStart.bind(this);
    this.onEditFinish = this.onEditFinish.bind(this);
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
  
  render() {
    const { editing } = this.state;
    const title = this.props.title;

    return (
      <section className={lowercaseFirstLetter(title)}>
        {editing ? <button className="edit-btn" onClick={this.onEditFinish}>Finish editing</button> : <button className="edit-btn" onClick={this.onEditStart}>Edit</button>}
        <h2>{title}</h2>
        <div className="divider"></div>
        <div className="skills-container">
            <SkillColumn editing={editing}></SkillColumn>
        </div>
      </section>
    );
  }
}

export default Section;
