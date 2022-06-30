import React, { Component } from "react";
import Buttons from "./Buttons";
import Fieldsets from "./Fieldsets";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    return (
      <section>
        <div className="first-line">
          <h1>Some Name</h1>
          <Buttons editing={this.state.editing} />
        </div>
        <h2>Occupation</h2>
        <Fieldsets editing={this.state.editing} />
      </section>
    );
  }
}

export default Section;
