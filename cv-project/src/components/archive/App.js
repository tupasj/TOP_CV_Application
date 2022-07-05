import React, { Component } from "react";
import PersonalInfo from "../PersonalInfo";
import Section from "./Section";

class App extends Component {
  render() {
    return (
      <div className="app">
        <PersonalInfo />
        <Section title="Skills" type="list" quantity="4" />
        <Section title="Work-experience" type="div" quantity="1"/>
        <section>
          <div className="first-line">
            <h2>Education</h2>
            <button>Edit</button>
          </div>
          <div className="divider"></div>
          <div className="field">Institution</div>
          <div className="field">Title of study</div>
          <div className="field">Date of study</div>
        </section>
      </div>
    );
  }
}

export default App;